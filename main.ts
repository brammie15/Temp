player.onChat("level2", function () {
    CodeCosmos.setup_level1()
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
player.onChat("intro", function () {
    CodeCosmos.setup_intro()
    for (let index = 0; index < 10; index++) {
        if (!(CodeCosmos.is_brick()) && (CodeCosmos.is_cobblestone() && CodeCosmos.is_wood())) {
            CodeCosmos.set_current_lever(lever_state.ON)
        } else {
            CodeCosmos.set_current_lever(lever_state.OFF)
        }
    }
})

player.onChat("level3", function () {
    CodeCosmos.setup_level3()
    while (CodeCosmos.test_for_block_under_agent(FARMLAND)) {
        agent.move(FORWARD, 1)
        agent.destroy(FORWARD)
        if (CodeCosmos.test_for_block_in_front_of_agent(WATER) && CodeCosmos.test_for_block_left_of_agent(WATER)) {
            agent.turn(RIGHT_TURN)
        }
        if (CodeCosmos.test_for_block_in_front_of_agent(WATER) && CodeCosmos.test_for_block_left_of_agent(WATER)) {
            agent.turn(LEFT_TURN)
        }
        CodeCosmos.test_for_block_in_front_of_agent(WATER)
        CodeCosmos.test_for_block_right_of_agent(WATER)
        CodeCosmos.test_for_block_left_of_agent(WATER)
    }
})