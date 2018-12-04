import { assert } from "chai";
import Yargs from "yargs";

import { getArgs } from "./args";

describe("args module", () => {
  it("should load the get the configuration options from yargs", () => {
    // Set up yargs.
    getArgs();

    const args = Yargs.parse([
      "--delete",
      "--directory",
      "./test",
      "--exclude",
      "zeta.ts$",
      "--include",
      "a.ts$",
      "--location",
      "top",
      "--name",
      "barrel",
      "--structure",
      "filesystem",
      "--verbose"
    ]);

    assert.isUndefined(args.config);
    assert.equal(args.delete, true);
    assert.equal(args.directory, "./test");
    assert.sameMembers(args.include, ["a.ts$"]);
    assert.sameMembers(args.exclude, ["zeta.ts$"]);
    assert.equal(args.location, "top");
    assert.equal(args.name, "barrel");
    assert.equal(args.structure, "filesystem");
    assert.equal(args.verbose, true);
  });
  // TODO: Check things are defaulted correctly.
});
