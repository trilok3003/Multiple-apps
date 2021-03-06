
    export interface Global {
        NewConfirmed: number;
        TotalConfirmed: number;
        NewDeaths: number;
        TotalDeaths: number;
        NewRecovered: number;
        TotalRecovered: number;
    }

    export interface Country {
        Country: string;
        CountryCode: string;
        Slug: string;
        NewConfirmed: number;
        TotalConfirmed: number;
        NewDeaths: number;
        TotalDeaths: number;
        NewRecovered: number;
        TotalRecovered: number;
        Date: Date;
    }

    export interface DataModel {
        Global: Global;
        Countries: Country[];
        Date: Date;
    }


