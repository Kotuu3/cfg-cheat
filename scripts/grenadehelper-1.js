
// if reading this --- > gay //

var _0x50e2 = ['", [', "You must specify a valid time to run!", "high explosive grenade", "text", "Script items", "push", "running", "decoy grenade", " ]\n", "SetViewAngles", "sin", "GetProp", "Draw locations through walls", "attacked", "smoke grenade", "Silent throw (Rage)", "m_vecOrigin", "player_connect_full", "StringCustom", "Line", "flashbang", "on_chat", "FilledRect", "filter", "indexOf", "atan2", "TextSize", "WorldToScreen", "GetRenderOrigin", "You have cancelled this grenade setup!", "GetMapName", 
"SetButtons", "CBasePlayer", "Molotovs", "cancel", "check_visibility", "locations.js", "Your grenade is ready to go!\n", "IsLocalPlayer", "CreateMove", "start_tick", "Throw", "GetViewAngles", "AddMultiDropdown", "Please enter a number!", '], "', "toLowerCase", '[ "', "Smokes", "GetInt", "Curtime", "Activate helper", "Grenade setup", "PrintChat", "draw", "Draw", "GetScreenSize", "splice", "GetName", "Tickcount", "GetServerString", "], [", "m_vecViewOffset[2]", "GetEyePosition", "GetButtons", "Enabled grenades", 
"IsHotkeyActive", "next_tick_ang", "high explosive grenades", "sqrt", "AddHotkey", "GetString", "cos", "Run+Jump+Throw", "SetMovement", "Circle", "Your grenade is ready to go, check console!", "run_start", "RegisterCallback", "Please hold a valid grenade!", "GetValue", "GradientRect", "Print", "userid", "How far should you run (in ticks) to throw this nade? (default = 22)", "Jump+Throw", "Grenade setup has timed out!", "incendiary grenade", "GetEntityFromUserID", "move_on_key", "Run+Throw", "SetEnabled", 
"GetWeapon", "closest", "molotov", "ignore_input", "abs", "length", "AddCheckbox", "player_say", "Half throw", "String", '","', "Nade location tools", "GetLocalPlayer", "Flashbangs", '", "', "Please enter a name for this grenade. (Type `cancel` to cancel setup!)", "print_nade_stats"];
(function(_0x1be293, _0x50e229) {
    var _0x482c45 = function(_0x2f8b37) {
        while (--_0x2f8b37) {
            _0x1be293['push'](_0x1be293['shift']());
        }
    };
    _0x482c45(++_0x50e229);
}(_0x50e2, 0xd9));
var _0x482c = function(_0x1be293, _0x50e229) {
    _0x1be293 = _0x1be293 - 0x0;
    var _0x482c45 = _0x50e2[_0x1be293];
    return _0x482c45;
};
UI[_0x482c('0x63')](_0x482c('0xd'));
UI[_0x482c('0x47')](_0x482c('0x34'));
UI[_0x482c('0x63')](_0x482c('0x10'));
UI[_0x482c('0x2c')](_0x482c('0x42'), [_0x482c('0x22'), _0x482c('0x45'), _0x482c('0x6a'), _0x482c('0x31')]);
UI[_0x482c('0x63')](_0x482c('0x68'));
UI[_0x482c('0x47')](_0x482c('0x35'));
_locations = require(_0x482c('0x25'));
var ticks_to_run = 0x16;
var last_angle_time = 0x0;
var chat_tut = ![];
var chat_stage = 0x0;
var chat_start = 0x0;
var temp_nade = [];

function print_nade_stats() {
    if (UI[_0x482c('0x43')](_0x482c('0x5'), _0x482c('0x35')) && !chat_tut && World[_0x482c('0x3d')]() != '') {
        chat_start = Globals[_0x482c('0x33')]();
        Cheat['PrintChat'](_0x482c('0x6c'));
        chat_stage = 0x0;
        chat_tut = !![];
    }
}

function on_chat() {
    if (!Entity[_0x482c('0x27')](Entity[_0x482c('0x59')](Event[_0x482c('0x32')](_0x482c('0x54')))) || !chat_tut) return;
    var _0x1ee819 = Event[_0x482c('0x48')](_0x482c('0x4'));
    if (_0x1ee819['toLowerCase']() == _0x482c('0x23')) {
        chat_tut = ![];
        temp_nade = [];
        chat_stage = 0x0;
        chat_start = 0x0;
        Cheat[_0x482c('0x36')](_0x482c('0x1e'));
        return;
    }
    if (chat_stage == 0x0) {
        if (!~GRENADE_TYPES[_0x482c('0x19')](Entity[_0x482c('0x3b')](Entity[_0x482c('0x5d')](Entity['GetLocalPlayer']())))) return Cheat[_0x482c('0x36')](_0x482c('0x50'));
        temp_nade[0x0] = World[_0x482c('0x1f')]();
        temp_nade[0x1] = Entity[_0x482c('0x1d')](Entity[_0x482c('0x69')]());
        temp_nade[0x2] = Local[_0x482c('0x2b')]();
        temp_nade[0x3] = Entity[_0x482c('0x3b')](Entity['GetWeapon'](Entity[_0x482c('0x69')]()));
        temp_nade[0x4] = _0x1ee819 + '';
        Cheat[_0x482c('0x36')]('How\x20do\x20you\x20throw\x20this\x20grenade?\x20(0\x20=\x20Throw,\x201\x20=\x20Run+Throw,\x202\x20=\x20Jump+Throw,\x203\x20=\x20Run+Jump+Throw,\x204\x20=\x20Half\x20throw)');
        chat_start = Globals[_0x482c('0x33')]();
        chat_stage++;
    } else if (chat_stage == 0x1) {
        if (isNaN(parseInt(_0x1ee819)) || parseInt(_0x1ee819) > 0x4 || parseInt(_0x1ee819) < 0x0) return Cheat[_0x482c('0x36')](_0x482c('0x2d'));
        if (parseInt(_0x1ee819) == 0x0) temp_nade[0x5] = _0x482c('0x2a');
        if (parseInt(_0x1ee819) == 0x1) temp_nade[0x5] = _0x482c('0x5b');
        if (parseInt(_0x1ee819) == 0x2) temp_nade[0x5] = _0x482c('0x56');
        if (parseInt(_0x1ee819) == 0x3) temp_nade[0x5] = 'Run+Jump+Throw';
        if (parseInt(_0x1ee819) == 0x4) temp_nade[0x5] = _0x482c('0x65');
        chat_start = Globals[_0x482c('0x33')]();
        if (parseInt(_0x1ee819) == 0x1) {
            chat_stage = 0x3;
            Cheat[_0x482c('0x36')](_0x482c('0x55'));
        } else {
            temp_nade[0x6] = 0x0;
            Cheat['PrintChat'](_0x482c('0x4d'));
            Cheat[_0x482c('0x53')](_0x482c('0x26'));
            Cheat[_0x482c('0x53')](_0x482c('0x30') + World[_0x482c('0x1f')]() + _0x482c('0x1') + Entity[_0x482c('0x40')](Entity[_0x482c('0x69')]()) + _0x482c('0x3e') + Local[_0x482c('0x2b')]() + _0x482c('0x2e') + Entity['GetName'](Entity['GetWeapon'](Entity[_0x482c('0x69')]())) + _0x482c('0x67') + temp_nade[0x4] + _0x482c('0x6b') + temp_nade[0x5] + '\x22,\x200\x20]\x0a');
            chat_stage = 0x0;
            chat_tut = ![];
            temp_nade = [];
            chat_start = 0x0;
        }
    } else if (chat_stage == 0x3) {
        if (isNaN(parseInt(_0x1ee819)) || parseInt(_0x1ee819) < 0x1) return Cheat[_0x482c('0x36')](_0x482c('0x2'));
        temp_nade[0x6] = parseInt(_0x1ee819);
        Cheat[_0x482c('0x36')](_0x482c('0x4d'));
        Cheat[_0x482c('0x53')]('Your\x20grenade\x20is\x20ready\x20to\x20go!\x0a');
        Cheat[_0x482c('0x53')](_0x482c('0x30') + World[_0x482c('0x1f')]() + _0x482c('0x1') + Entity[_0x482c('0x40')](Entity[_0x482c('0x69')]()) + _0x482c('0x3e') + Local[_0x482c('0x2b')]() + _0x482c('0x2e') + Entity[_0x482c('0x3b')](Entity[_0x482c('0x5d')](Entity[_0x482c('0x69')]())) + '\x22,\x22' + temp_nade[0x4] + _0x482c('0x6b') + temp_nade[0x5] + '\x22,' + parseInt(_0x1ee819) + _0x482c('0x9'));
        chat_stage = 0x0;
        chat_tut = [];
        temp_nade = [];
        chat_start = 0x0;
    }
}
Cheat[_0x482c('0x4f')](_0x482c('0x64'), _0x482c('0x16'));
var locations = _locations['locations'];
var map_cache = [];
var enabled_grenades = [];
var selection_cache = 0x0;
var hand_cache = 0x0;
const GRENADE_TYPES = [_0x482c('0x3'), _0x482c('0xf'), _0x482c('0x5f'), _0x482c('0x8'), 'incendiary\x20grenade', _0x482c('0x15')];
import_grenade_selection();
var weapon = Entity[_0x482c('0x3b')](Entity[_0x482c('0x5d')](Entity[_0x482c('0x69')]()));
if (weapon == 'incendiary\x20grenade') weapon = 'molotov';
map_cache = locations['filter'](function(_0x52c080) {
    return _0x52c080[0x0] == World[_0x482c('0x1f')]() && ~enabled_grenades[_0x482c('0x19')](_0x52c080[0x3][_0x482c('0x2f')]()) && _0x52c080[0x3][_0x482c('0x2f')]() == weapon;
});
Cheat[_0x482c('0x4f')](_0x482c('0x28'), _0x482c('0x0'));

function draw() {
    if (chat_tut && Globals[_0x482c("0x33")]() - chat_start > 15) {
        /** @type {number} */
        chat_stage = 0;
        /** @type {number} */
        chat_start = 0;
        /** @type {boolean} */
        chat_tut = ![];
        /** @type {!Array} */
        temp_nade = [];
        Cheat[_0x482c("0x36")](_0x482c("0x57"));
      }
      UI[_0x482c("0x5c")](_0x482c("0x35"), UI[_0x482c("0x51")]("Script items", _0x482c("0x68")));
      var artistTrack = Entity[_0x482c("0x3b")](Entity[_0x482c("0x5d")](Entity[_0x482c("0x69")]()));
      if (artistTrack == _0x482c("0x58")) {
        artistTrack = _0x482c("0x5f");
      }
      if (!~GRENADE_TYPES[_0x482c("0x19")](artistTrack)) {
        return;
      }
      if (selection_cache != UI[_0x482c("0x51")]("Script items", _0x482c("0x42")) || (hand_cache != artistTrack || !~GRENADE_TYPES[_0x482c("0x19")](artistTrack))) {
        import_grenade_selection();
        map_cache = locations["filter"](function(canCreateDiscussions) {
          return canCreateDiscussions[0] == World["GetMapName"]() && ~enabled_grenades[_0x482c("0x19")](canCreateDiscussions[3]["toLowerCase"]()) && canCreateDiscussions[3][_0x482c("0x2f")]() == artistTrack;
        });
      }
      if (map_cache[_0x482c("0x62")] == 0) {
        return;
      }
      var indexLookupKey;
      for (indexLookupKey in map_cache) {
        var _0x1b80df = Render[_0x482c("0x1c")]([map_cache[indexLookupKey][1][0], map_cache[indexLookupKey][1][1], map_cache[indexLookupKey][1][2] - 63]);
        if (!map_cache[indexLookupKey][7] && !UI[_0x482c("0x51")](_0x482c("0x5"), _0x482c("0xd"))) {
          continue;
        }
        var _0x548e5c = angle_to_vec(map_cache[indexLookupKey][2][0], map_cache[indexLookupKey][2][1]);
        var _0x3df22e = map_cache[indexLookupKey][1];
        _0x548e5c = Render[_0x482c("0x1c")]([_0x3df22e[0] + _0x548e5c[0] * 400, _0x3df22e[1] + _0x548e5c[1] * 400, _0x3df22e[2] + _0x548e5c[2] * 400]);
        var _0xff469d = calc_dist(Entity["GetRenderOrigin"](Entity[_0x482c("0x69")]()), map_cache[indexLookupKey][1]);
        Render[_0x482c("0x4c")](_0x1b80df[0], _0x1b80df[1], 6, [89, 119, 239, 255]);
        var rPairs = Render["TextSize"](map_cache[indexLookupKey][4], 8);
        var mPairs = Render[_0x482c("0x1b")](map_cache[indexLookupKey][5], 8);
        Render["FilledRect"](_0x1b80df[0] + 9, _0x1b80df[1] - rPairs[1] / 1.5, rPairs[0] + 7, rPairs[1] + 4, [45, 43, 48, 255]);
        Render[_0x482c("0x52")](_0x1b80df[0] + 10, _0x1b80df[1] - rPairs[1] / 1.5, rPairs[0] + 5, 2, 1, [89, 119, 239, 255], [89, 119, 239, 255]);
        shadow(_0x1b80df[0] + 12.5, _0x1b80df[1] - 5, 0, map_cache[indexLookupKey][4], ![], undefined, [255, 255, 255, 255], 8);
        if (_0xff469d > 70) {
          continue;
        }
       
        
        shadow(_0x548e5c[0] + 12.5, _0x548e5c[1] - 5, 0, map_cache[indexLookupKey][4], ![], undefined, [255, 255, 255, 255], 8); // TEXT //
        Render["Circle"](_0x548e5c[0], _0x548e5c[1], 6, [56, 200, 56, 255]); // КРУЖОК СВЕРХУ // 
        
    }
}

function check_visibility() {
    if (map_cache[_0x482c('0x62')] == 0x0 || World[_0x482c('0x3d')]() == '') return;
    var _0x551bf7 = Entity[_0x482c('0x69')]();
    eye_angles = Local['GetViewAngles']();
    head = Entity[_0x482c('0xc')](_0x551bf7, _0x482c('0x21'), _0x482c('0x11'));
    offset = Entity[_0x482c('0xc')](_0x551bf7, _0x482c('0x21'), _0x482c('0x3f'));
    head = vector_add(head, [0x0, 0x0, offset[0x0]]);
    for (var _0x2b5bd3 in map_cache) {
        var _0x538d1a = Trace[_0x482c('0x14')](_0x551bf7, head, map_cache[_0x2b5bd3][0x1]);
        if (map_cache[_0x2b5bd3][0x7] == undefined) map_cache[_0x2b5bd3][_0x482c('0x6')](_0x538d1a[0x1] == 0x1);
        else map_cache[_0x2b5bd3][0x7] = _0x538d1a[0x1] == 0x1;
    }
}

function fix_move(_0x489a8d, _0x34caa6, _0x381139) {
    var _0x2fc07f = function(_0x5a0195) {
        return _0x5a0195 / 0xb4 * Math['PI'];
    };
    var _0x18298d, _0x2facd6, _0x3b626d;
    if (_0x34caa6[0x1] < 0x0) _0x18298d = 0x168 + _0x34caa6[0x1];
    else _0x18298d = _0x34caa6[0x1];
    if (_0x489a8d[0x1] < 0x0) _0x2facd6 = 0x168 + _0x489a8d[0x1];
    else _0x2facd6 = _0x489a8d[0x1];
    if (_0x2facd6 < _0x18298d) _0x3b626d = Math[_0x482c('0x61')](_0x2facd6 - _0x18298d);
    else _0x3b626d = 0x168 - Math[_0x482c('0x61')](_0x18298d - _0x2facd6);
    return [Math[_0x482c('0x49')](_0x2fc07f(_0x3b626d)) * _0x381139[0x0] + Math['cos'](_0x2fc07f(_0x3b626d + 0x5a)) * _0x381139[0x1], Math[_0x482c('0xb')](_0x2fc07f(_0x3b626d)) * _0x381139[0x0] + Math[_0x482c('0xb')](_0x2fc07f(_0x3b626d + 0x5a)) * _0x381139[0x1], 0x0];
}

function move_forward(_0x5c24d7) {
    var _0x53f3c2 = Local[_0x482c('0x2b')]();
    var _0x1f3343 = [0x1c2, 0x0, 0x0];
    var _0x5e4713 = fix_move(_0x5c24d7, _0x53f3c2, _0x1f3343);
    var _0x10dc08 = UI[_0x482c('0x51')](_0x482c('0x5'), 'Silent\x20throw\x20(Rage)') == 0x1 ? !![] : ![];
    UserCMD[_0x482c('0x4b')](_0x5e4713);
    UserCMD[_0x482c('0xa')](_0x5c24d7, _0x10dc08);
}

function move_on_key() {
    if (map_cache[_0x482c('0x62')] == 0x0) return;
    if (!~GRENADE_TYPES[_0x482c('0x19')](Entity[_0x482c('0x3b')](Entity[_0x482c('0x5d')](Entity[_0x482c('0x69')]())))) return;
    var _0x3e5ca0 = UI[_0x482c('0x51')](_0x482c('0x5'), _0x482c('0x10')) == 0x1 ? !![] : ![];
    if (!UI['IsHotkeyActive'](_0x482c('0x5'), _0x482c('0x34'))) {
        this[_0x482c('0x7')] = ![];
        this[_0x482c('0x60')] = ![];
        this[_0x482c('0x29')] = 0x0;
        this['next_tick_ang'] = [];
        this[_0x482c('0xe')] = ![];
        this['moved_base'] = ![];
        this[_0x482c('0x4e')] = 0x0;
        return;
    }
    if (this['next_tick_ang'] == null) this[_0x482c('0x44')] = [];
    if (this[_0x482c('0x60')]) {
        UserCMD[_0x482c('0xa')](this['next_tick_ang'], _0x3e5ca0);
        return;
    }
    if (this[_0x482c('0x44')]['length']) {
        UserCMD[_0x482c('0xa')](this[_0x482c('0x44')], _0x3e5ca0);
    }
    if (this['attacked'] == null) this[_0x482c('0xe')] = ![];
    if (this[_0x482c('0x29')] == null) this['start_tick'] = 0x0;
    if (this[_0x482c('0x7')] == null) this[_0x482c('0x7')] = ![];
    if (this[_0x482c('0x5e')] == null) this[_0x482c('0x5e')] = [];
    if (this[_0x482c('0x60')] == null) this[_0x482c('0x60')] = ![];
    if (this[_0x482c('0x4e')] == null) this[_0x482c('0x4e')] = 0x0;
    var _0x2e9279 = Entity[_0x482c('0x1d')](Entity['GetLocalPlayer']());
    var _0x45d624 = map_cache['sort'](function(_0x1d5a8a, _0x177623) {
        return calc_dist(_0x2e9279, _0x1d5a8a[0x1]) - calc_dist(_0x2e9279, _0x177623[0x1]);
    })[0x0];
    if (this[_0x482c('0x5e')][_0x482c('0x62')]) {
        _0x45d624 = this['closest'];
    }
    if (calc_dist(_0x2e9279, _0x45d624[0x1]) > 0xc8 && !this[_0x482c('0x60')]) {
        return;
    }
    var _0xc8d6ad = move_to_target(_0x45d624[0x1]);
    if (_0xc8d6ad || this[_0x482c('0x7')]) {
        if (_0x45d624[0x5] == _0x482c('0x2a')) {
            UserCMD[_0x482c('0x20')](UserCMD[_0x482c('0x41')]() | 0x1);
            this['attacked'] = !![];
            this['ignore_input'] = !![];
            this[_0x482c('0x44')] = _0x45d624[0x2];
        } else if (_0x45d624[0x5] == _0x482c('0x5b')) {
            if (!this[_0x482c('0x5e')][_0x482c('0x62')]) this[_0x482c('0x5e')] = _0x45d624;
            if (this[_0x482c('0x29')] == 0x0) {
                this['start_tick'] = Globals[_0x482c('0x3c')]();
            }
            this[_0x482c('0x7')] = !![];
            if (this['run_start'] == 0x0) this[_0x482c('0x4e')] = Globals[_0x482c('0x3c')]();
            move_forward(_0x45d624[0x2]);
            if (this['running'] && Globals[_0x482c('0x3c')]() - this[_0x482c('0x4e')] > _0x45d624[0x6]) {
                if (!this[_0x482c('0xe')]) {
                    UserCMD[_0x482c('0x20')](UserCMD[_0x482c('0x41')]() | 0x1);
                    this[_0x482c('0xe')] = !![];
                }
                if (Globals[_0x482c('0x3c')]() - this[_0x482c('0x4e')] > _0x45d624[0x6] + 0x8) {
                    this[_0x482c('0x7')] = ![];
                    this['attacked'] = ![];
                    this['closest'] = [];
                    this[_0x482c('0x60')] = !![];
                    this[_0x482c('0x44')] = _0x45d624[0x2];
                    this[_0x482c('0x4e')] = 0x0;
                }
            }
        } else if (_0x45d624[0x5] == _0x482c('0x56')) {
            UserCMD[_0x482c('0x20')](UserCMD[_0x482c('0x41')]() | 0x1 | 0x2);
            this[_0x482c('0x44')] = _0x45d624[0x2];
            this[_0x482c('0x60')] = !![];
            this[_0x482c('0xe')] = !![];
        } else if (_0x45d624[0x5] == _0x482c('0x4a')) {
            if (!this['closest'][_0x482c('0x62')]) this[_0x482c('0x5e')] = _0x45d624;
            if (this['start_tick'] == 0x0) {
                this[_0x482c('0x29')] = Globals[_0x482c('0x3c')]();
            }
            var _0x5f318a = angle_to_vec(_0x45d624[0x2][0x0], _0x45d624[0x2][0x1]);
            _0x5f318a = vec_mul_fl(_0x5f318a, 0x82);
            this[_0x482c('0x7')] = !![];
            move_forward(_0x45d624[0x2]);
            var _0x2909fa = vector_sub(vector_add(_0x5f318a, _0x45d624[0x1]), Entity[_0x482c('0x1d')](Entity[_0x482c('0x69')]()));
            var _0x5541df = Math['hypot'](_0x2909fa[0x0], _0x2909fa[0x1]);
            if (_0x5541df < 0x50) {
                UserCMD['SetButtons'](UserCMD[_0x482c('0x41')]() | 0x1 | 0x2);
                this['attacked'] = !![];
                this[_0x482c('0x7')] = ![];
                this[_0x482c('0x5e')] = [];
                this[_0x482c('0x60')] = !![];
                this['next_tick_ang'] = _0x45d624[0x2];
            }
        } else if (_0x45d624[0x5] == 'Half\x20throw') {
            if (this['start_tick'] == 0x0) {
                this[_0x482c('0x29')] = Globals[_0x482c('0x3c')]();
            }
            UserCMD['SetButtons'](UserCMD[_0x482c('0x41')]() | 0x1 << 0x0 | 0x1 << 0xb);
            if (Globals[_0x482c('0x3c')]() - this['start_tick'] > 0x18) {
                this[_0x482c('0xe')] = !![];
                this[_0x482c('0x60')] = !![];
                this[_0x482c('0x44')] = _0x45d624[0x2];
            }
        }
    } else {
        this[_0x482c('0x7')] = ![];
        this[_0x482c('0x5e')] = [];
        this[_0x482c('0x60')] = ![];
        this[_0x482c('0x29')] = 0x0;
        this['moved_base'] = ![];
        this['run_start'] = 0x0;
    }
}

function on_local_connect() {
    if (Entity[_0x482c('0x27')](Entity[_0x482c('0x59')](Event[_0x482c('0x32')]('userid')))) {
        map_cache = locations[_0x482c('0x18')](function(_0x2dec9d) {
            return _0x2dec9d[0x0] == World[_0x482c('0x1f')]();
        });
    }
}
Cheat[_0x482c('0x4f')](_0x482c('0x38'), _0x482c('0x37'));
Cheat[_0x482c('0x4f')](_0x482c('0x28'), _0x482c('0x24'));
Cheat['RegisterCallback'](_0x482c('0x28'), _0x482c('0x5a'));
Cheat[_0x482c('0x4f')](_0x482c('0x12'), 'on_local_connect');

function getAngles(_0x2ca2d6, _0x15fc31) {
    newPos = vector_sub(_0x15fc31, _0x2ca2d6);
    xyDist = Math[_0x482c('0x46')](newPos[0x0] * newPos[0x0] + newPos[0x1] * newPos[0x1]);
    yaw = Math[_0x482c('0x1a')](newPos[0x1], newPos[0x0]) * 0xb4 / Math['PI'];
    pitch = Math[_0x482c('0x1a')](-newPos[0x2], xyDist) * 0xb4 / Math['PI'];
    roll = 0x0;
    angles = [pitch, yaw, roll];
    return angles;
}

function vector_sub(_0x591db9, _0x1986c9) {
    return [_0x591db9[0x0] - _0x1986c9[0x0], _0x591db9[0x1] - _0x1986c9[0x1], _0x591db9[0x2] - _0x1986c9[0x2]];
}

function degreesToRadians(_0x4e7ec5) {
    return _0x4e7ec5 * Math['PI'] / 0xb4;
}

function angle_to_vec(_0x36b95e, _0x1eb3e5) {
    var _0xfe92c4 = degreesToRadians(_0x36b95e);
    var _0x4e5b2b = degreesToRadians(_0x1eb3e5);
    var _0x17a29a = Math[_0x482c('0xb')](_0xfe92c4);
    var _0x4460da = Math[_0x482c('0x49')](_0xfe92c4);
    var _0x3d66b0 = Math[_0x482c('0xb')](_0x4e5b2b);
    var _0x52d66b = Math['cos'](_0x4e5b2b);
    return [_0x4460da * _0x52d66b, _0x4460da * _0x3d66b0, -_0x17a29a];
}

function vector_add(_0x479eae, _0x1116a9) {
    newVec = [_0x479eae[0x0] + _0x1116a9[0x0], _0x479eae[0x1] + _0x1116a9[0x1], _0x479eae[0x2] + _0x1116a9[0x2]];
    return newVec;
}

function shadow(_0x8a89f0, _0x3b057e, _0x440bee, _0xa7182e, _0x36af0d, _0x3d242f, _0xfc6d3e, _0xab371f) {
    if (_0x36af0d) {
        Render[_0x482c('0x13')](_0x8a89f0 + _0xab371f / 7.17, _0x3b057e + _0xab371f / 7.17, _0x440bee, _0xa7182e, [0x0, 0x0, 0x0, 0xff], _0x3d242f);
        Render[_0x482c('0x13')](_0x8a89f0, _0x3b057e, _0x440bee, _0xa7182e, _0xfc6d3e, _0x3d242f);
    } else {
        Render['String'](_0x8a89f0 + _0xab371f / 7.17, _0x3b057e + _0xab371f / 7.17, _0x440bee, _0xa7182e, [0x0, 0x0, 0x0, 0xff], _0xab371f);
        Render[_0x482c('0x66')](_0x8a89f0, _0x3b057e, _0x440bee, _0xa7182e, _0xfc6d3e, _0xab371f);
    }
}

function import_grenade_selection() {
    var _0x2c9e77 = UI['GetValue'](_0x482c('0x5'), _0x482c('0x42'));
    if (_0x2c9e77 == 0x0) enabled_grenades = [];
    if (getDropdownValue(_0x2c9e77, 0x0) && !~enabled_grenades[_0x482c('0x19')]('molotov')) enabled_grenades[_0x482c('0x6')](_0x482c('0x5f'));
    else if (~enabled_grenades[_0x482c('0x19')](_0x482c('0x5f')) && !getDropdownValue(_0x2c9e77, 0x0)) enabled_grenades['splice'](enabled_grenades[_0x482c('0x19')](_0x482c('0x5f')), 0x1);
    if (getDropdownValue(_0x2c9e77, 0x1) && !~enabled_grenades[_0x482c('0x19')](_0x482c('0x3'))) enabled_grenades[_0x482c('0x6')](_0x482c('0x3'));
    else if (~enabled_grenades['indexOf']('high\x20explosive\x20grenade') && !getDropdownValue(_0x2c9e77, 0x1)) enabled_grenades[_0x482c('0x3a')](enabled_grenades['indexOf'](_0x482c('0x3')), 0x1);
    if (getDropdownValue(_0x2c9e77, 0x2) && !~enabled_grenades['indexOf'](_0x482c('0x15'))) enabled_grenades['push'](_0x482c('0x15'));
    else if (~enabled_grenades[_0x482c('0x19')](_0x482c('0x15')) && !getDropdownValue(_0x2c9e77, 0x2)) enabled_grenades[_0x482c('0x3a')](enabled_grenades['indexOf'](_0x482c('0x15')), 0x1);
    if (getDropdownValue(_0x2c9e77, 0x3) && !~enabled_grenades[_0x482c('0x19')]('smoke\x20grenade')) enabled_grenades[_0x482c('0x6')]('smoke\x20grenade');
    else if (~enabled_grenades[_0x482c('0x19')](_0x482c('0xf')) && !getDropdownValue(_0x2c9e77, 0x3)) enabled_grenades[_0x482c('0x3a')](enabled_grenades[_0x482c('0x19')]('smoke\x20grenade'), 0x1);
    selection_cache = _0x2c9e77;
    hand_cache = Entity[_0x482c('0x3b')](Entity['GetWeapon'](Entity[_0x482c('0x69')]()));
}

function vec_mul_fl(_0x4237dd, _0x241cdc) {
    return [_0x4237dd[0x0] * _0x241cdc, _0x4237dd[0x1] * _0x241cdc, _0x4237dd[0x2] * _0x241cdc];
}

function calc_dist(_0x5c2b22, _0x30def9) {
    x = _0x5c2b22[0x0] - _0x30def9[0x0];
    y = _0x5c2b22[0x1] - _0x30def9[0x1];
    z = _0x5c2b22[0x2] - _0x30def9[0x2];
    return Math['sqrt'](x * x + y * y + z * z);
}

function move_to_target(_0x3b01eb, _0x54339c) {
    var _0x4e4f43 = Entity['GetLocalPlayer']();
    var _0x31c9d6 = Entity['GetRenderOrigin'](_0x4e4f43);
    _0x31c9d6[0x2] = Entity['GetEyePosition'](_0x4e4f43)[0x2];
    var _0x58318d = [_0x3b01eb[0x0] - _0x31c9d6[0x0], _0x3b01eb[0x1] - _0x31c9d6[0x1], _0x3b01eb[0x2] - _0x31c9d6[0x2]];
    var _0x1533a8 = Local[_0x482c('0x2b')]()[0x1];
    var _0x4f69d5 = [];
    var _0x31e5cb = 0x14;
    _0x4f69d5[0x0] = (Math['sin'](_0x1533a8 / 0xb4 * Math['PI']) * _0x58318d[0x1] + Math[_0x482c('0x49')](_0x1533a8 / 0xb4 * Math['PI']) * _0x58318d[0x0]) * _0x31e5cb;
    _0x4f69d5[0x1] = (Math[_0x482c('0xb')](_0x1533a8 / 0xb4 * Math['PI']) * _0x58318d[0x0] + Math[_0x482c('0x49')](_0x1533a8 / 0xb4 * Math['PI']) * -_0x58318d[0x1]) * _0x31e5cb;
    _0x4f69d5[0x2] = 0x0;
    var _0x418918 = Math[_0x482c('0x46')](_0x58318d[0x0] * _0x58318d[0x0] + _0x58318d[0x1] * _0x58318d[0x1] + _0x58318d[0x2] * _0x58318d[0x2]);
    var _0x6229fe = Entity['GetProp'](_0x4e4f43, 'DT_CSPlayer', 'm_vecVelocity[0]');
    var _0x52a76f = Math[_0x482c('0x46')](_0x6229fe[0x0] * _0x6229fe[0x0] + _0x6229fe[0x1] * _0x6229fe[0x1] + _0x6229fe[0x2] * _0x6229fe[0x2]);
    UserCMD[_0x482c('0x4b')](_0x4f69d5);
    return _0x418918 < (_0x54339c ? _0x54339c : 0x1) && (_0x52a76f < 0x2 || _0x54339c);
}

function getDropdownValue(_0x499a6f, _0x2c71b6) {
    var _0x42da07 = 0x1 << _0x2c71b6;
    return _0x499a6f & _0x42da07 ? !![] : ![];
}