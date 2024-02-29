import e from "express";

export class RetrieverController {
  public static retrieve(req: e.Request, res: e.Response) {
    res.send("Supporting Material Manager\n").status(200);
  }
}