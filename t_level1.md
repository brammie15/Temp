### @hideIteration true
### @flyoutOnly true
# level 1
```blocks
player.onChat("level1", function () {
    CodeCosmos.setup_level1()
    while (CodeCosmos.test_for_block_under_agent(FARMLAND)) {
        agent.move(FORWARD, 1)
        agent.destroy(FORWARD)
    }
})

```

```template
player.onChat("level1", function () {
    CodeCosmos.setup_level1()
    while (CodeCosmos.test_for_block_under_agent(FARMLAND)) {
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
    }
})
```

## Level 1

Use the learning platform to solve the exercise.
