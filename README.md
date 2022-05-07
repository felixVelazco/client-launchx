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
    state fork_state <<fork>>
    state fork_state2 <<fork>>
    [*] --> fork_state
    fork_state --> Router.js
    fork_state --> httpCommon.js
    
    note right of Router.js
      You call here all the components to use 
      (those components are the different views
      and set all routes)
    end note
    
    Router.js --> fork_state2
    
    fork_state2 --> AddExplorer.vue
    fork_state2 --> Explorer.vue
    fork_state2 --> ExplorerList.vue
    
    httpCommon.js --> ExplorerService.js
    
    ExplorerService.js --> fork_state2
    
    note left of httpCommon.js
      Access to httpCommon protocol and 
      define BaseUrl
    end note
    
    note left of ExplorerService.js
      Create class and all the http endpoints
      functions. 
    end note
    
     note right of AddExplorer.vue
      Page that create a new explorer
    end note
    
    note right of Explorer.vue
      Page to edit or delete an explorer 
    end note
    
    note right of ExplorerList.vue
      Page where it show all the explorers
      list
    end note
 
    
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
