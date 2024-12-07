export interface clima{
    name: string;
    main: {
      temp: number;
      humidity: number;
    };
    weather: [
      {
        description: string;
      }
    ];   
}
