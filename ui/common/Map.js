"use client";

import { useRef, useEffect } from "react";

import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";

export const Map = ({ projects }) => {
  const mapRef = useRef();
  const mapContainerRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZXN0aXZlbmFtZyIsImEiOiJjbWxhMXUzNmowOWZ3M2VweHUzM2puMDNnIn0.4IscbolQ66Z8fcEEIsvesA";
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/satellite-streets-v12",
      //   center: [-74.5, 40],
      //   zoom: 9,
    });

    // Navigation Control of this map
    map.addControl(new mapboxgl.NavigationControl());
    // Geolocalication of this map
    map.addControl(new mapboxgl.GeolocateControl());

    projects.forEach((project) => {
      const el = document.createElement("div");
      el.className = "marker";
      el.dataset.projectId = project.position._id;

      el.addEventListener("click", () => {
        console.log("Clicked project: ", el.dataset.projectId);
      });

      new mapboxgl.Marker()
        .setLngLat([project.position.lng, project.position.lat])
        .addTo(map);

      new mapboxgl.Popup()
        .setLngLat([project.position.lng, project.position.lat])
        .setHTML(`<h3>${project.clientData.title}</h3><p>${project.city}</p>`)
        .addTo(map);
    });

    mapRef.current = map;
    return () => {
      mapRef.current.remove();
    };
  }, [projects]);

  return (
    <section className="mapContainer" style={{ gridArea: "map" }}>
      <div id="map-container" ref={mapContainerRef} className="mapboxgl" />
    </section>
  );
};
