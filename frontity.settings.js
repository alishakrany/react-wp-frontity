const settings = {
  "name": "react-wp",
  "state": {
    "frontity": {
      "url": "http://wp.fwp-host.tk",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "الرئيسية",
              "/"
            ],
            [
              "الثقلفة البصرية",
              "/vl"
            ],
            [
              "علم النفس",
              "/psyco"
            ],
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://wp.fwp-host.tk/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
