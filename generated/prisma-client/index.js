"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Snack",
    embedded: false
  },
  {
    name: "Nutrition",
    embedded: false
  },
  {
    name: "Dietary",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/jack151298/SNACSpjratjon-server/dev`
});
exports.prisma = new exports.Prisma();
