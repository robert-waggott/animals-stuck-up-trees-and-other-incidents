# Animals stuck up trees and other incidents

This is an ongoing personal development task more than anything so I can keep my typescript, node/nestJS skills, and React skills up to date and current whilst working on work projects that sit outside of that ecosystem. 

The data is an London Fire Brigade (LFB) dataset containing data of when and where the LFB have responded to incidents involving cats stuck up trees, and other incidents involving animals. I originally thought it would be interesting to map the data. 

The dataset can be found [here](https://data.london.gov.uk/dataset/animal-rescue-incidents-attended-by-lfb). I originally found this dataset, and other equally interesting datasets from the [data is plural newsletter](https://www.data-is-plural.com/). The specific newsletter addition linking to this dataset can be found [here](https://www.data-is-plural.com/archive/2021-06-16-edition/). 

## Todo

- [x] Basic map
- [ ] Use of router with link to a credits doc and/or this readme
- [x] Detail view in side panel
- [ ] Detail map within side panel
- [ ] Search by Postcode
- [ ] Search by Lat/Lng
- [ ] Search by Easting/Northing
- [ ] Search by ward
- [ ] vscode task to split the terminal on startup 😱
- [ ] Tests
- [ ] Store data in mongoDB rather than read from file each time
- [ ] Investigate additional LFB/related datasets

## Refactors

- [x] Refactor app -> info panel passing through of incidentNumber into a reducer in app? 
- [ ] Refactor sidebar to use scss module 
- [ ] Convert from Nest to Apollo? 
