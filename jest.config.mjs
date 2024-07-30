import { defineConfig } from "vite"

   defineConfig({
  // 指定测试文件的扩展名
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // 用于转换JSX和ES6语法
  },
  // 模块查找路径
  moduleDirectories: ['node_modules', 'src'],
  // 模块文件扩展名
  moduleFileExtensions: ['js', 'json', 'jsx'],
  // 测试文件匹配模式
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?)$',
  // 测试环境
  testEnvironment: 'jsdom',
  // 测试覆盖率报告
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  // 测试覆盖率阈值
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  // 全局变量
  globals: {
    '__JEST__': true,
  },
  // 测试前运行的脚本
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  // 测试覆盖率排除的文件
  coveragePathIgnorePatterns: ['/node_modules/', '/test/'],
  // 测试结果输出的目录
  testResultsProcessor: 'jest-sonar-reporter',
  // 测试运行器
  testRunner: 'jest-circus/runner',
  // 测试报告的格式
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: './test-results/', outputName: 'results.xml' }],
  ],
  // 测试失败时不退出
  bail: 0,
  // 只运行指定的测试
  onlyChanged: false,
  // 测试超时时间
  testTimeout: 5000,
  // 允许使用 ES6 模块
  modulePaths: ['<rootDir>/src'],
  // 允许的测试文件扩展名
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],
  // 测试匹配的文件
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  // 测试覆盖率排除的全局变量
  testPathIgnorePatterns: ['/node_modules/', '/build/'],
  // 测试覆盖率排除的模块
  coveragePathIgnorePatterns: ['/node_modules/', '/build/'],
  // 测试覆盖率不包含的全局变量
  watchPathIgnorePatterns: ['/node_modules/'],
  // 测试时的全局设置
  globalSetup: '<rootDir>/src/setupTests.js',
  // 测试完成后的全局脚本
  globalTeardown: '<rootDir>/src/teardownTests.js',
  // 测试时的 watch 模式设置
  watch: true,
  // 测试时的 watchman 配置
  watchman: true,
  // 测试时的 snapshot 序列化程序
  snapshotSerializers: ['enzyme-to-json/serializer'],
  // 测试时的 resetMocks 配置
  resetMocks: true,
  // 测试时的 restoreMocks 配置
  restoreMocks: true,
  // 测试时的 fakeTimers 配置
  fakeTimers: {
    "enableGlobally": true,
  },
  // 测试时的 notify 配置
  notify: true,
  // 测试时的 preset 配置
  preset: 'jest-preset-react-native',
})
