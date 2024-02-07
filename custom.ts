/**
 * Custom blocks
 */

enum lever_state{
    //% block="aan"
    ON,
    //% block="uit"
    OFF
}


enum RelativeDirection{
    Forwards = 0,
    Backwards = 1,
    Left = 2,
    Right = 3
}
player.execute("/scriptevent cc:getId " + mobs.queryTarget((mobs.target(MY_AGENT)))[0].uniqueId)
player.say("Hello world!");
//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {

    //Fix for getting agent position

    
    let currentLeverId = 0;
    //% block="Zet klaar"
    export function setup_intro(){
        currentLeverId = 0;
        //clone 28 68 273  38 68 273  28 70 268
        blocks.clone(
            world(28, 68, 273),
            world(38, 68, 273),
            world(28, 70, 268),
            CloneMask.Replace,
            CloneMode.Force
        )
    }

    //% block="volgende schakelaar"
    export function next_lever(){
        if (currentLeverId < 11){
            currentLeverId++;
        }
    }

    //% block="stel schakelaar in op %state"
    //% state.defl=lever_state.OFF
    export function set_current_lever(state: lever_state){
        set_lever(currentLeverId, state == lever_state.ON);
    }

    //% block="Set lever %lever value %state"
    //% lever.min=0 lever.max=10 lever.defl=0
    export function set_lever(lever: number, state: boolean): void {
        let leverRoot: Position = world(28, 70, 268);
        let testblockRoot: Position = world(28, 67, 267);

        let currentLever: Position = leverRoot.add(world(lever, 0, 0));
        let currentTestblock: Position = testblockRoot.add(world(lever, 0, 0));
        agent.teleport(currentLever.add(world(0, 0, 1)), NORTH);
        // let currentSateString = blocks.testForBlock(IRON_BLOCK, currentTestblock) ? "ON" : "OFF"
        // let desiredStateString = state ? "ON" : "OFF"
        // player.say("CURRENT LEVER STATE IS: " + currentSateString)
        // player.say("DESIRED STATE IS: " + desiredStateString);

        if (blocks.testForBlock(IRON_BLOCK, currentTestblock) != state) {
            agent.interact(FORWARD);
        }
    }

    function is_block_present(block: Block): boolean{
        let leverRoot: Position = world(28, 70, 268);
        let currentLever: Position = leverRoot.add(world(currentLeverId, 0, 0)).add(world(0, 0, -1));

        for (let i = 0; i < 4; i++) {
            if (blocks.testForBlock(block, currentLever.add(world(0, i, 0)))) {
                return true;
            }
        }
        return false;
    }

    //% block="is hout"
    export function is_wood(): boolean{
       return is_block_present(PLANKS_OAK);
    }

    //% block="is baksteen"
    export function is_brick(): boolean {
        return is_block_present(BRICKS)
    }

    //% block="is keisteen"
    export function is_cobblestone(): boolean {
        return is_block_present(COBBLESTONE);
    }

    

    //% block="zet klaar"
    export function setup_level1(){
        //fill 55 70 216 74 70 216 wheat["growth"=7]
        blocks.place(REDSTONE_BLOCK, world(56,68,211))
        agent.teleport(world(54, 70, 216), EAST)
        agent.move(FourDirection.Forward, 1);
    }

    //% block="zet klaar"
    export function setup_level2() {
        //fill 55 70 216 74 70 216 wheat["growth"=7]
        blocks.place(REDSTONE_BLOCK, world(44, 68, 216))
        agent.teleport(world(46, 70, 220), WEST)
    }

    //% block="zet klaar"
    export function setup_level3() {
        //fill 55 70 216 74 70 216 wheat["growth"=7]
        blocks.place(REDSTONE_BLOCK, world(54, 68, 242))
        agent.teleport(world(56, 70, 235), EAST)
    }

    //% block="is blok %block=block onder agent"
    //% block.shadow=minecraftBlock
    export function test_for_block_under_agent(block: number): boolean {
        return blocks.testForBlock(block, agent.getPosition().add(world(0, -1, 0))) || blocks.testForBlock(block, agent.getPosition().add(world(0, -3, 0)))
    }
    

    //% block="is blok %block=block links van de agent"
    //% block.shadow=minecraftBlock
    export function test_for_block_left_of_agent(block: number): boolean {
        return blocks.testForBlock(block, agent.getPosition().add(pos(0,-1,0).add(getAgentVectors()[RelativeDirection.Left])));
    }


    //% block="is blok %block=block rechts van de agent"
    //% block.shadow=minecraftBlock
    export function test_for_block_right_of_agent(block: number): boolean {
        return blocks.testForBlock(block, agent.getPosition().add(pos(0, -1, 0).add(getAgentVectors()[RelativeDirection.Right])));
    }

    

    //% block="is blok %block=block voor van de agent"
    //% block.shadow=minecraftBlock
    export function test_for_block_in_front_of_agent(block: number): boolean {
        return blocks.testForBlock(block, agent.getPosition().add(pos(0, -1, 0).add(getAgentVectors()[RelativeDirection.Forwards])));
    }

    //% block="breek plant"
    export function break_plant(): void {
        agent.destroy(FourDirection.Forward)
    }

    function invertPos(position: Position) : Position{
        return pos(-position.getValue(Axis.X), -position.getValue(Axis.Y), -position.getValue(Axis.Z))
    }

    function getAgentVectors() : Position[]{
        let forwardVector = pos(0,0,0)
        let leftVector = pos(0,0,0)
        switch (agent.getOrientation()) {
            case 0:
                //South
                forwardVector = pos(0, 0, 1)
                leftVector = pos(1, 0, 0)
                break;
            case 90:
                //West
                forwardVector = pos(-1, 0 ,0)
                leftVector = pos(0,0,1)
                break;
            case -180:
                //North
                forwardVector = pos(0, 0, -1)
                leftVector = pos(-1, 0, 0)
                break;
            case -90:
                //East
                forwardVector = pos(1,0,0)
                leftVector = pos(0, 0, -1)
                break;
        }
        return [forwardVector, invertPos(forwardVector), leftVector, invertPos(leftVector)];
    }

}
