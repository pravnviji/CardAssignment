module.exports = {
  moduleNameMapper: {
    "@core/(.*)": "<rootDir>/src/app/$1",
  },
  preset: "jest-preset-angular",
  moduleDirectories: ["node_modules", "src"],
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  modulePaths: ["<rootDir>"],
};
