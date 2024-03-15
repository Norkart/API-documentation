# Coordinate transformations

## Coordinate reference frames

Geospatial vector data consists of pairs for coordinates denoting where on earth they are. These coordinates are expressed in terms of a reference frame. Without this reference frame we cannot say anything about a pair of coordinates.

A coordinate reference frame consists of two components:

1. **An ellipsoid**. This is a mathematical representation of the earth. Several ellipsoids are in use, as no single ellipsoid is a perfect match. WGS84 is the international ellipsoid used by GPS recievers and for general exchange of geospatial data. ETRS89 is an ellipsoid that is optimized for Europe, and is the official ellipsioid for Norwegion geospatial data.

2. **A projection**. This is a method for projecting positions on a three-dimensional ellipsioid down to a flat surface (the map). This operation will distort some properties (area, distance, angles), so several projections exist. Each of them come with their own pros and cons.

### EPSG-codes

Each coordinate referece frame is identified by an "EPSG"-code. This is a string on the form "EPSG:nnnn". These codes identifies coordinate referece frames across systems. [epsg.io](https://epsg.io) is a great resource for looking these up.

## Unprojected coordinates (Latitude and longitude)

Coordinates can either be projected or unprojected. Unprojected coordinates does not apply a projection, and are positions on a threedimensional ellipsoid. These are generally referred to as "longitude and latitude" [1]. Unprojected coordinates cannot be used in cartesian operations, as they denote angles on a non-planar surface.

Unprojected (or _geographic_) coordinates are referencing a specific ellipsoid, such as WGS84 or ETRS89. Coordinates retrieved from GPS recievers are unprojected coordinates on the WGS84 ellisoid.

Converting coordinates from one ellipsoid to another is based on heuristic formulas and will induce some degree of error.

## Projected coordinates

Projected coordinates are coordinates that have been projected to a planar surface. Several methods for projecting coordinates exist. Some methods works globally, some for parts of the world.

### Web mercator

Web mercator is a simple projection that works globally (except on the poles) and is used for displaying most webmaps. Libraries that works with web mercator coordinates usually reference the WGS84 ellipsoid, and exposes _unprojected_ coordinates to the user/developer.

### Universal Transversal Mercator (UTM)

UTM is a projection system that works by dividing the world into 60 zones, each with a width of 6°. Coordinates projected using UTM are cartesian and uses meters as their unit. UTM is an official projection for Norway, but instead of strictly following the 6° wide zones, zones 32, 33 and 35 are used. Each municipality has a designated zone.

## Coordinate transformation libraries

Converting coordinates from one coordinate referece frame to another is a mathematical operation known as _transformation_. This involves a fair amount of math (and in the case of transforming from one ellipsoid to another, a known set of parameters).

Luckily, there are high-quality, open-source, software libraries for coordinate transformations in several languages.

-   JavaScript / Typescript: [Proj4Js](https://github.com/proj4js/proj4js)
-   C#: [DotSpatial.Projections](https://www.nuget.org/packages/DotSpatial.Projections)
-   Java: [Proj4J](https://github.com/locationtech/proj4j)
-   Python: [PyProj](https://github.com/pyproj4/pyproj)
-   C: [Proj](https://proj.org)

[1]: https://en.wikipedia.org/wiki/Geographic_coordinate_system
