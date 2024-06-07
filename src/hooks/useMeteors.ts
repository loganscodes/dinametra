import { useEffect, useRef } from "react";
import { Vessel, VesselFeature } from "../interfaces/interfaceVessel";
import { METEORS_ENTRY } from "../constants/meteors";
import mapboxgl from "mapbox-gl";

export const useMeteors = () => {

    const mapContainer = useRef<HTMLDivElement>(null);

    const vessels: Vessel[] = METEORS_ENTRY.map((meteor: any, index: number) => ({
        id: index + 1,
        name: meteor.name || "",
        coordinates: [parseFloat(meteor.reclong), parseFloat(meteor.reclat)],
        path: [],
    }));

    useEffect(() => {
        mapboxgl.accessToken =
            "pk.eyJ1IjoibG9nYW5jb2RlcyIsImEiOiJjbHgyamc0bGswbXlxMmlvYzZmaWl1MmR6In0.UAQ5BFTC__11XQmwpH-Qlg";

        if (mapContainer.current) {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/dark-v11",
                center: [-74.0060152, 40.7127281],
                zoom: 5,
                maxZoom: 15,
            });

            map.addControl(new mapboxgl.NavigationControl(), "top-left");

            map.on("style.load", () => {
                map.loadImage(
                    "./comet.webp",
                    (error, image) => {
                        if (error) throw error;

                        if (image) {

                            map.addImage("custom-marker", image);

                            vessels.forEach((vessel) => {
                                map.addSource(`vessel-source-${vessel.id}`, {
                                    type: "geojson",
                                    data: {
                                        type: "FeatureCollection",
                                        features: [],
                                    },
                                });

                                map.addLayer({
                                    id: `vessel-layer-${vessel.id}`,
                                    type: "symbol",
                                    source: `vessel-source-${vessel.id}`,
                                    layout: {
                                        "icon-image": "custom-marker",
                                        "icon-size": 0.09,
                                        "icon-allow-overlap": true,
                                    },
                                });


                                map.addSource(`vessel-line-source-${vessel.id}`, {
                                    type: "geojson",
                                    data: {
                                        type: "FeatureCollection",
                                        features: [],
                                    },
                                });

                                map.addLayer({
                                    id: `vessel-line-layer-${vessel.id}`,
                                    type: "line",
                                    source: `vessel-line-source-${vessel.id}`,
                                    paint: {
                                        "line-color": "#ff0000",
                                        "line-width": 2,
                                    },
                                });


                                vessel.path = [
                                    {
                                        type: "Feature",
                                        geometry: {
                                            type: "Point",
                                            coordinates: vessel.coordinates,
                                        },
                                        properties: {
                                            name: vessel.name,
                                        },
                                    },
                                ];
                            });
                        } else {
                            console.error("Failed to load the custom image.");
                        }
                    }
                );

                setInterval(() => {
                    vessels.forEach((vessel) => {


                        const source = map.getSource(`vessel-source-${vessel.id}`);

                        if (source && source.type === "geojson") {
                            const newFeature: VesselFeature = {
                                type: "Feature",
                                geometry: {
                                    type: "Point",
                                    coordinates: vessel.coordinates,
                                },
                                properties: {
                                    name: vessel.name,
                                },
                            };

                            source.setData({
                                type: "FeatureCollection",
                                features: [newFeature],
                            });

                            const lineSource = map.getSource(
                                `vessel-line-source-${vessel.id}`
                            );
                            if (lineSource && lineSource.type === "geojson") {

                                vessel.path.push(newFeature);

                                const lineStringFeature: GeoJSON.Feature<
                                    GeoJSON.LineString,
                                    {}
                                > = {
                                    type: "Feature",
                                    geometry: {
                                        type: "LineString",
                                        coordinates: vessel.path.map((f) => f.geometry.coordinates),
                                    },
                                    properties: {},
                                };

                                lineSource.setData({
                                    type: "FeatureCollection",
                                    features: vessel.path.length > 1 ? [lineStringFeature] : [],
                                });
                            }
                        }
                    });
                }, 20000);
            });


            return () => map.remove();
        }
    });


    return {
        mapContainer
    }





}