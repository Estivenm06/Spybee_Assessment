"use client";

import { useRef, useEffect } from "react";

import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import { useMap } from "@/ui/states/useMap";

import styles from "./map.module.css"

export const Map = ({ projects }) => {
  const coordenates = useMap((s) => s.coordenates);

  const mapRef = useRef();
  const mapContainerRef = useRef();

  const markersRef = useRef([]);
  const popupRef = useRef(
    new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
      className: styles.popup,
    }),
  );

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZXN0aXZlbmFtZyIsImEiOiJjbWxhMXUzNmowOWZ3M2VweHUzM2puMDNnIn0.4IscbolQ66Z8fcEEIsvesA";
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/satellite-streets-v12",
      center: coordenates,
      zoom: 4,
    });

    // Navigation Control of this map
    map.addControl(new mapboxgl.NavigationControl());
    // Geolocalication of this map
    map.addControl(new mapboxgl.GeolocateControl());

    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];

    projects.forEach((project) => {
      const coordenatesProject = [project.position.lng, project.position.lat];

      const markerElement = document.createElement("div")
      markerElement.className = styles.marker;
      
      const marker = new mapboxgl.Marker(markerElement)
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
  }, [projects, coordenates]);

  return (
    <section className={styles.mapContainer} style={{ gridArea: "map" }}>
      <div id="map-container" ref={mapContainerRef} className={styles.mapboxgl} />
    </section>
  );
};
