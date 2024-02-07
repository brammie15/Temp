### @hideIteration true
### @flyoutOnly true
# level 2
```blocks
player.onChat("level2", function () {
    CodeCosmos.setup_level2()
    while (CodeCosmos.test_for_block_under_agent(FARMLAND)) {
        agent.move(FORWARD, 1)
        agent.destroy(FORWARD)
        if (CodeCosmos.test_for_block_in_front_of_agent(WATER) && CodeCosmos.test_for_block_left_of_agent(WATER)) {
            agent.turn(RIGHT_TURN)
        }
        CodeCosmos.test_for_block_in_front_of_agent(WATER)
        CodeCosmos.test_for_block_right_of_agent(WATER)
        CodeCosmos.test_for_block_left_of_agent(WATER)
    }
})
```

```template
player.onChat("level2", function () {
    CodeCosmos.setup_level2()
    while (CodeCosmos.test_for_block_under_agent(FARMLAND)) {
        agent.move(FORWARD, 1)
        agent.destroy(FORWARD)
        if (CodeCosmos.test_for_block_left_of_agent(WATER) && CodeCosmos.test_for_block_in_front_of_agent(WATER)) {
            agent.turn(RIGHT_TURN)
        }
    }
})
```

## Level 2

Use the learning platform to solve the exercise.
