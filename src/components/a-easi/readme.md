# a-easi



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description | Type         | Default     |
| ---------- | ----------- | ----------- | ------------ | ----------- |
| `score`    | --          |             | `IEasiScore` | `undefined` |
| `showText` | `show-text` |             | `boolean`    | `undefined` |
| `value`    | --          |             | `IEasi`      | `undefined` |


## Events

| Event         | Description | Type                      |
| ------------- | ----------- | ------------------------- |
| `scoreChange` |             | `CustomEvent<IEasiScore>` |
| `valueChange` |             | `CustomEvent<IEasi>`      |


## Dependencies

### Depends on

- [a-easi-ernie](../a-easi-ernie)
- [a-easi-select](../a-easi-select)
- [a-easi-messages](../a-messages)

### Graph
```mermaid
graph TD;
  a-easi --> a-easi-ernie
  a-easi --> a-easi-select
  a-easi --> a-easi-messages
  a-easi-select --> a-easi-messages
  style a-easi fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
