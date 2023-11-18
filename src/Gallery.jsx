import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./context";

const url = `https://api.unsplash.com/search/photos/?client_id=${
  import.meta.env.VITE_CLIENT_ID
}`;
export default function Gallery() {
  const { searchTerm } = useGlobalContext();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["images", searchTerm], //triggers for a re-fetch
    queryFn: async () => {
      const { data } = await axios.get(`${url}&query=${searchTerm}`);

      return data;
    },
  });

  if (isLoading) {
    return (
      <section className="image-container">
        <div className="loading"></div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="image-container">
        <h4 style={{ color: "red" }}>There was an error!</h4>
      </section>
    );
  }
  if (data.results.length < 1) {
    return (
      <section className="image-container">
        <h4>There was not found any photo...</h4>
      </section>
    );
  }
  return (
    <section className="image-container">
      {data.results.map((i) => {
        const url = i?.urls?.regular;
        return (
          <a
            href={url}
            key={i.id}
            target="_blank"
            style={{ position: "relative" }}
          >
            <img src={url} alt={i.alt_description} className="img" />
            <p
              style={{
                color: "lightgreen",
                position: "absolute",
                fontVariant: "small-caps",
                bottom: 3,
                left: 3,
                background: "rgba(0.2,0.2,0.2,0.5)",
                padding: 3,
                paddingTop: 0,
                fontSize: "small",
              }}
            >
              {i.alt_description}
            </p>
          </a>
        );
      })}
    </section>
  );
}
