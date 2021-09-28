"use strict";

const USER_ARGV_INDEX = 2;

const TITLES_PATH = `./data/titles.txt`;
const SENTENCES_PATH = `./data/sentences.txt`;
const CATEGORIES_PATH = `./data/categories.txt`;
const COMMENTS_PATH = `./data/comments.txt`;

const SumRestrict = {
  MIN: 1000,
  MAX: 100000,
};

const OfferType = {
  OFFER: `offer`,
  SALE: `sale`,
};

const PictureRestrict = {
  MIN: 1,
  MAX: 16,
};

const DEFAULT_COUNT = 1;
const FILE_NAME = `mocks.json`;
const DEFAULT_COMMAND = `--help`;

const COUNT = process.argv.slice(3);

const EXIT_CODES = {
  codeSuccess: 0,
  codeFailure: 1,
};

const DEFAULT_PORT = 3000;

const HttpCode = {
  OK: 200,
  CREATED: 201,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
};

const MAX_ID_LENGTH = 6;

const MAX_COMMENTS = 4;

const API_PREFIX = `/api`;

module.exports = {
  USER_ARGV_INDEX,
  TITLES_PATH,
  SENTENCES_PATH,
  CATEGORIES_PATH,
  COMMENTS_PATH,
  SumRestrict,
  OfferType,
  PictureRestrict,
  DEFAULT_COUNT,
  FILE_NAME,
  DEFAULT_COMMAND,
  COUNT,
  EXIT_CODES,
  DEFAULT_PORT,
  HttpCode,
  MAX_ID_LENGTH,
  MAX_COMMENTS,
  API_PREFIX,
};

