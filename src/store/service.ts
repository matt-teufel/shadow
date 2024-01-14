import { get, put } from "aws-amplify/api";

type GameStateResponse = {
  level: number;
  messages: string[];
  uid: string;
};

export async function fetchState(
  username: string
): Promise<GameStateResponse | null> {
  try {
    const restOperation = get({
      apiName: "shadowCasterAPI",
      path: "/state/" + username,
    });
    const response = await restOperation.response;
    const data = (await response.body.json()) as GameStateResponse[];
    if (data.length > 0) {
      return data[0];
    }
  } catch (error) {
    console.log("GET call failed: ", error);
  }
  return null;
}

export async function updateState(
  username: string,
  level: number,
  messages: string[]
) {
  try {
    const currentState = {
      level: level,
      messages: messages,
      uid: username,
    };
    const restOperation = put({
      apiName: "shadowCasterAPI",
      path: "/state",
      options: {
        body: currentState,
      },
    });
    const response = await restOperation.response;
    console.log("PUT call succeeded: ", response);
  } catch (err) {
    console.log("PUT call failed: ", err);
  }
}
