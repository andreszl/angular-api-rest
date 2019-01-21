"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_db_1 = __importDefault(require("../connection_db"));
class GamesController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const games = yield connection_db_1.default.query('select * from games');
                res.json(games);
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_db_1.default.query('insert into games set ?', [req.body]);
                res.json({ text: `the game has been created!` });
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield connection_db_1.default.query('update games set ? where id = ?', [req.body]);
                res.json({ text: `the game with id ${req.params.id} has been updated!` });
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params.id;
                yield connection_db_1.default.query('delete from games where id = ?', [id]);
                res.json({ text: `the game with id ${req.params.id} has been deleted! ` });
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    getGameById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const games = yield connection_db_1.default.query('select * from games where id = ?', [id]);
                if (games.length > 0) {
                    return res.json(games[0]);
                }
                else {
                    res.status(404).json({ text: "the game doesn't exists" });
                }
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}
exports.gamesController = new GamesController();
