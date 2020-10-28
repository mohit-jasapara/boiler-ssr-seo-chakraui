export function getSeoData(host) {
    return HOST_SEO_DATA[host] || HOST_SEO_DATA['default'];
}

const HOST_SEO_DATA = {
    "host1": {
        title: "Host1 title",
        description: "Host1 description",
        keywords: "Host1 keywords",
        latitude: "Host1 latitude",
        longitude: "Host1 longitude",
        placename: "Host1 placename",
        region: "Host1 region",
    },
    "host2": {
        title: "Host2 title",
        description: "Host2 description",
        keywords: "Host2 keywords",
        latitude: "Host2 latitude",
        longitude: "Host2 longitude",
        placename: "Host2 placename",
        region: "Host2 region",
    },
    'default': {
        title: "Default title",
        description: "Default description",
        keywords: "Default keywords",
        latitude: "Default latitude",
        longitude: "Default longitude",
        placename: "Default placename",
        region: "Default region",
    }
}