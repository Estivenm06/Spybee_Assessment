"use client";

import { useRef, useEffect } from "react";

import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";

export const Map = ({ projects }) => {
  const mapRef = useRef();
  const mapContainerRef = useRef();

  const markersRef = useRef([]);
  const popupRef = useRef(
    new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
      className: "popup",
    }),
  );

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZXN0aXZlbmFtZyIsImEiOiJjbWxhMXUzNmowOWZ3M2VweHUzM2puMDNnIn0.4IscbolQ66Z8fcEEIsvesA";
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/satellite-streets-v12",
      center: [-74.5, 40],
      //   zoom: 9,
    });

    // Navigation Control of this map
    map.addControl(new mapboxgl.NavigationControl());
    // Geolocalication of this map
    map.addControl(new mapboxgl.GeolocateControl());

    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];

    projects.forEach((project) => {
      const coordenatesProject = [project.position.lng, project.position.lat];

      const marker = new mapboxgl.Marker()
        .setLngLat(coordenatesProject)
        .addTo(map);

      const el = marker.getElement();
      el.style.cursor = "pointer";

      el.addEventListener("click", () => {
        popupRef.current
          .setLngLat(coordenatesProject)
          .setHTML(`<strong>${project.title}</strong>`)
          .addTo(map);
      });

      // el.addEventListener("click", () => {
      //   console.log("Clicked project: ", project._id);
      // });

      el.addEventListener("touchstart", () => {
        popupRef.current
          .setLngLat(coordenatesProject)
          .setHTML(`<strong>${project.title}</strong>`)
          .addTo(map);
      });

      el.addEventListener("touchend", () => {
        popupRef.current.remove();
      });

      markersRef.current.push(marker);
    });

    mapRef.current = map;
    return () => {
      markersRef.current.forEach((m) => m.remove());
      markersRef.current = [];
      mapRef.current.remove();
    };
  }, [projects]);

  return (
    <section className="mapContainer" style={{ gridArea: "map" }}>
      <div id="map-container" ref={mapContainerRef} className="mapboxgl" />
    </section>
  );
};
