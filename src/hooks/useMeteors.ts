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
        path: [], // Puedes inicializar esta propiedad según tus necesidades
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

            // Add zoom controls
            map.addControl(new mapboxgl.NavigationControl(), "top-left");

            map.on("style.load", () => {
                map.loadImage(
                    "https://static.vecteezy.com/system/resources/thumbnails/014/493/255/small_2x/comet-cartoon-the-meteorite-fell-to-the-earth-and-sparked-png.png",
                    (error, image) => {
                        if (error) throw error;

                        if (image) {
                            // Add custom image to the map
                            map.addImage("custom-marker", image);

                            vessels.forEach((vessel) => {
                                // Add vessel point source and layer
                                map.addSource(`vessel-source-${vessel.id}`, {
                                    type: "geojson",
                                    data: {
                                        type: "FeatureCollection",
                                        features: [],
                                    },
                                });

                                map.addLayer({
                                    id: `vessel-layer-${vessel.id}`,
                                    type: "symbol", // Change the layer type to "symbol"
                                    source: `vessel-source-${vessel.id}`,
                                    layout: {
                                        "icon-image": "custom-marker",
                                        "icon-size": 0.09, // Adjust the size of the custom image
                                        "icon-allow-overlap": true, // Allow overlapping symbols
                                    },
                                });

                                // Add vessel line source and layer
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

                                // Initialize vessel path
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
                        vessel.coordinates = [
                            vessel.coordinates[0] + 0.01 * Math.random(),
                            vessel.coordinates[1] + 0.01 * Math.random(),
                        ];

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
                                // Update vessel path
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
                }, 20000); // Update every 20 seconds
            });

            // Clean up on unmount
            return () => map.remove();
        }
    }, []);


    return {
        mapContainer
    }





}