# vue-3-crud

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Diagrams
```mermaid
flowchart TD

    DB[(Database)] <--> httpCommon.js

        httpCommon.js --> ExplorerService.js
    subgraph Explorers


        ExplorerService.js --> AddExplorer.vue 
        ExplorerService.js --> Explorer.vue
        ExplorerService.js --> ExplorerList.vue
    end
    
        httpCommon.js --> MissionCommanderService.js
    subgraph Mission Commanders

        MissionCommanderService.js --> AddMissionCommander.vue
        MissionCommanderService.js --> MissionCommander.vue
        MissionCommanderService.js --> MissionCommandersList.vue
    end

    AddMissionCommander.vue --> Router.js
    MissionCommander.vue --> Router.js
    MissionCommandersList.vue --> Router.js

    AddExplorer.vue --> Router.js
    Explorer.vue --> Router.js
    ExplorerList.vue --> Router.js

    Router.js --> app.vue
    app.vue --> main.js
   
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
