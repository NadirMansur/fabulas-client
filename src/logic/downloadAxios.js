import axios from "axios"

const getUrlFile = async (url) => {
    const config = {
      url,
      method: "GET",
      responseType: "blob"
    };

    try {
      const response = await axios.request(config);
      const blob = new Blob([response.data]);
      const fileUri = FileSystem.cacheDirectory + 'download.json';
      await FileSystem.writeAsStringAsync(fileUri, blob, { encoding: FileSystem.EncodingType.Base64 });
      return fileUri;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  useEffect((url) => {
    const fetchData = async () => {
      const downloadUrl = await getUrlFile(url);
      
      if (downloadUrl) {
        Linking.openURL(downloadUrl);
      }
    };

    fetchData();
  }, []);