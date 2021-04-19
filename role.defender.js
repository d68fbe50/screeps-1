var roleDefender = {
    run: function(creep, pos) {
        const target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(target) {
            if(creep.attack(target) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
            }
        } else {
            if(pos === 0) {
                creep.moveTo(4, 8);
            }
            if(pos === 1) {
                creep.moveTo(44, 25);
            }
        }
    }
};

module.exports = roleDefender;