import { create } from "zustand";
//import * as FileSystem from 'expo-file-system';
//import data from "./fabulasJson"
const fabulasStore = create((set, get) => {
  return {
   fabulas: [],
    setFabulas:  (data) => {
      set({ fabulas: [...data] });

    },
    // readFabulas: async () => {
    //   try {
    //     const fileUri = FileSystem.documentDirectory + 'fabulas.json';
    //     const fileExists = await FileSystem.getInfoAsync(fileUri);
  
    //     if (fileExists.exists) {
    //       const fileContent = await FileSystem.readAsStringAsync(fileUri);
    //       const parsedFabulas = JSON.parse(fileContent);
    //       set({ fabulas: parsedFabulas });
    //     } else {
    //       console.log('El archivo fabulas.json no se encontró en el directorio.');
    //     }
    //   } catch (error) {
    //     console.error('Error al leer el archivo fabulas.json:', error);
    //   }
    // },
  };
});


export default fabulasStore;
