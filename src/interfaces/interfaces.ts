export interface Welcome {
    collection: Collection;
}

export interface Collection {
    version:  string;
    href:     string;
    items:    Item[];
    
}

export interface Item {
    href:   string;
    data:   Datum[];
    links?: ItemLink[];
}

export interface Datum {
    title:              string;
    keywords:           string[];
    nasa_id:            string;
    date_created:       Date;
    description:        string;
    description_508?:   string;
    secondary_creator?: string;
    location?:          string;
    album?:             string[];
    photographer?:      string;
}



export interface ItemLink {
    href:    string;
}


