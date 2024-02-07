### @hideIteration true
### @flyoutOnly true
# Mission Intro
```blocks
player.onChat("run", function () {
    CodeCosmos.setup_intro()
    for (let index = 0; index < 11; index++) {
        if (!(CodeCosmos.is_brick()) && (CodeCosmos.is_cobblestone() && CodeCosmos.is_wood())) {
            CodeCosmos.set_current_lever(lever_state.ON)
        } else {
            CodeCosmos.set_current_lever(lever_state.OFF)
        }
        CodeCosmos.next_lever()
    }
})

```

```template
player.onChat("intro", function () {
CodeCosmos.setup_intro()
for (let index = 0; index < 11; index++) {
      
}
})
```

## Hacking the door

Use the learning platform to solve the exercise.
