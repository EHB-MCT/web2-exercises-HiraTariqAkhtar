class Team{
    constructor(){
        this._teamName = "Default team"
        this._trainer = "Ash"
        this._roster = []
    }
    describe(){
        return `Team ${this._teamName} with trainer ${this._trainer} has the following pokemon: ${[... this._roster]}`
    }
}

export default Team;