import { add } from "lodash";

function getRandomIP() {
  return `${Math.floor(Math.random() * 256)}.${Math.floor(
    Math.random() * 256
  )}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
}

function getRandomTime() {
  return new Date(
    Date.now() - Math.floor(Math.random() * 10000000000)
  ).toISOString();
}

function getRandomDevice() {
  const platforms = ["Web", "iOS", "Android"];
  const browsers = ["Chrome", "Firefox", "Safari", "Edge"];
  const osVersions = ["17.2", "16.5", "15.4", "14.3"];
  const appVersions = ["1.5.3", "2.0.1", "3.1.4", "4.0.0"];

  let platform = platforms[Math.floor(Math.random() * platforms.length)];

  if (platform === "Web") {
    return {
      platform,
      browser: browsers[Math.floor(Math.random() * browsers.length)],
      browser_version: `${Math.floor(Math.random() * 100)}.${Math.floor(
        Math.random() * 10
      )}.${Math.floor(Math.random() * 10)}`,
      user_agent: `Mozilla/5.0 (${platform}) AppleWebKit/537.36 (KHTML, like Gecko)`,
    };
  } else {
    return {
      platform,
      os_version: osVersions[Math.floor(Math.random() * osVersions.length)],
      app_version: appVersions[Math.floor(Math.random() * appVersions.length)],
      user_agent: `Mozilla/5.0 (${platform}) AppleWebKit/605.1.15 (KHTML, like Gecko)`,
    };
  }
}

function generateUsers(count) {
  const users = [];

  for (let i = 0; i < count; i++) {
    users.push({
      email: `user${i + 1}@example.com`,
      time_login: getRandomTime(),
      ip_address: getRandomIP(),
      device_info: getRandomDevice(),
      status: 0,
      id: i + 1,
    });
  }

  return users;
}

export const state = () => ({
  isLoading: false,
  users: generateUsers(20),
});

export const mutations = {
  SET_LOADING(state, payload) {
    state.isLoading = payload;
  },
  SET_USERS(state, payload) {
    state.users = payload;
  },
};

export const actions = {
  setLoading({ commit }, payload) {
    commit("SET_LOADING", payload);
  },
  createUser({ commit, state }, payload) {
    commit("SET_USERS", [payload, ...state.users]);
  },
  deleteUser({ commit, state }, payload) {
    commit(
      "SET_USERS",
      state.users.filter((user) => user.id !== payload)
    );
  },
  updateUser({ commit, state }, payload) {
    commit(
      "SET_USERS",
      state.users.map((user) => (user.id === payload.id ? payload?.data : user))
    );
  },
};
