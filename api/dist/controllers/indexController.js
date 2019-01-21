"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.send("its works - IndexController");
    }
}
exports.indexController = new IndexController();
