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
stateDiagram-v2

    state fork_state2 <<fork>>
    state fork_state3 <<fork>>

    AddMissionCommander.vue --> fork_state3
    MissionCommander.vue --> fork_state3
    MissionCommandersList.vue --> fork_state3

    AddExplorer.vue --> fork_state2
    Explorer.vue --> fork_state2
    ExplorerList.vue --> fork_state2

    Router.js --> app.vue
    app.vue --> main.js
    main.js --> [*]
    
    

    fork_state2 --> Router.js
    fork_state3 --> Router.js
    
    
    
    
    ExplorerService.js --> httpCommon.js
    MissionCommanderService.js --> httpCommon.js
    
    
    fork_state2 --> ExplorerService.js
    fork_state3 --> MissionCommanderService.js
    

    

 
    
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
