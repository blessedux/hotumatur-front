export default async function handler(req, res) {
    const TRIPADVISOR_API_KEY = "21079B36584745FF8D74DC6BF24CEAF7"; // Replace with your API key
    const LOCATION_ID = "26626022"; // Hotumatur RapaNui locationId
  
    try {
      const response = await fetch(
        `https://api.content.tripadvisor.com/api/v1/location/${LOCATION_ID}/reviews?language=en&key=${TRIPADVISOR_API_KEY}`,
        {
          headers: {
            accept: "application/json",
          },
        }
      );
  
      if (!response.ok) {
        throw new Error(`Tripadvisor API error: ${response.statusText}`);
      }
  
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error("Error fetching Tripadvisor reviews:", error.message);
      res.status(500).json({ error: "Failed to fetch reviews" });
    }
  }