import { msToTime, maybeWarnAboutParameters } from "../utils";
import { fakeSequence } from "../../../__test_support__/fake_state/resources";
import { error } from "farmbot-toastr";
import { Content } from "../../../constants";

describe("maybeWarnAboutParameters", () => {
  it("calls `error()` if the sequence uses params", () => {
    const s = fakeSequence();
    s.body.args.locals.body = [{
      kind: "parameter_declaration",
      args: { label: "parent", data_type: "point" }
    }];
    maybeWarnAboutParameters(s);
    expect(error).toHaveBeenCalledWith(Content.NO_PARAMETERS);
  });
});

describe("msToTime", () => {
  it("handles bad inputs", () => {
    // tslint:disable-next-line:no-any
    expect(msToTime("0" as any)).toBe("00:01");
  });
});
