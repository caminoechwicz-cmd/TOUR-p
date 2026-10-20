var APP_DATA = {
  "scenes": [
    {
      "id": "0-planta-baja",
      "name": "planta baja",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7349839431634457,
          "pitch": 0.10217768921883952,
          "rotation": 0,
          "target": "1-interior-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6212501630058469,
          "pitch": -0.27273435881166996,
          "title": "estructura",
          "text": "pilares y vigas recubiertos de madera&nbsp;"
        }
      ]
    },
    {
      "id": "1-interior-",
      "name": "interior ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.005891262383272533,
          "pitch": 0.014727001328033396,
          "rotation": 0,
          "target": "0-planta-baja"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.44524112940106164,
          "pitch": -0.28204915711160794,
          "title": "recubrimiento exterior&nbsp;",
          "text": "acero"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
