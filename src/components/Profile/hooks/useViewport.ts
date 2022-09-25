import { useEffect, useState } from "react";
import { viewportData } from "../utils/data";
import { viewport } from "../utils/types";

/**
 * Hook to determine viewport based on screen width
 */
export function useViewport() {
	const [viewport, setViewport] = useState<viewport>("mobile");

	useEffect(() => {
		function updateViewport() {
			const newViewport = calculateViewportByWidth(window.innerWidth);
			setViewport(newViewport);
		}

		updateViewport();
		window.addEventListener("resize", updateViewport);
		return () => window.removeEventListener("resize", updateViewport);
	}, []);

	return viewport;
}

/**
 * Calculates vieport based on width
 * @param screenWidth screen width
 * @returns viewport
 */
function calculateViewportByWidth(screenWidth: number) {
	return () => {
		let newViewport: viewport;
		const { start: tabletStart, end: tabletEnd } = viewportData["tablet"].range;

		if (screenWidth < tabletStart) newViewport = "mobile";
		else if (screenWidth > tabletEnd) newViewport = "desktopSmall";
		else newViewport = "tablet";

		return newViewport;
	};
}
