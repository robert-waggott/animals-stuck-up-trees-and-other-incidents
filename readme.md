# Animals stuck up trees and other incidents

This is an ongoing personal development task more than anything so I can keep my typescript, node/nestJS skills, and React skills up to date and current whilst working on work projects that sit outside of that ecosystem. 

The data is an London Fire Brigade (LFB) dataset containing data of when and where the LFB have responded to incidents involving cats stuck up trees, and other incidents involving animals. I originally thought it would be interesting to map the data. 

The dataset can be found [here](https://data.london.gov.uk/dataset/animal-rescue-incidents-attended-by-lfb). I originally found this dataset, and other equally interesting datasets from the [data is plural newsletter](https://www.data-is-plural.com/). The specific newsletter addition linking to this dataset can be found [here](https://www.data-is-plural.com/archive/2021-06-16-edition/). 

## Environment variables

### Server

Create a config.env in the root of the `./server` directory. It should look something like this:

```
PORT=3001
GEOCODIOAPIKEY=ec5...
```

- Port - The port to run the server on. Should default to `3001` as that's what the ui is currently expecting. 
- Geocodio API Key - Get a free API key [from here](https://www.geocod.io/). 

## Todo

- [ ] Implement search
- [ ] Ability to toggle ward/post code boundaries on/off 
- [ ] Ability to add events to the map
- [ ] vscode task to split the terminal on startup 😱
- [ ] Tests
- [ ] Store data in mongoDB rather than read from file each time
- [ ] Choose a license and add in a license file
- [x] Basic map
- [x] Use of router with link to a credits doc and/or this readme
- [x] Detail view in side panel
- [x] Investigate additional LFB/related datasets
- [x] Detail map within side panel

## Refactors

- [ ] Remove hardcoded map tiler API key - replace with server env variable
- [ ] Replace Geocodio with ESRI
- [ ] Convert from Nest to Apollo? 
- [x] Refactor app -> info panel passing through of incidentNumber into a reducer in app? 
- [x] Refactor sidebar to use scss module 
- [x] Emoji as favicon 
