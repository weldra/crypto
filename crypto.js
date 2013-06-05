/**
 *
 *
 * http://www.w3.org/TR/WebCryptoAPI/#crypto-interface
 */

self.crypto = self.crypto || {};

self.crypto.encrypt = self.crypto.encrypt || function(algorithm, key, buffer) {
  return new CryptoOperation('encrypt', algorithm, key);
};

self.crypto.decrypt = self.crypto.decrypt || function(algorithm, key, buffer) {
  return new CryptoOperation('decrypt', algorithm, key);
};

self.crypto.sign = self.crypto.sign || function(algorithm, key, buffer) {
  return new CryptoOperation('sign', algorithm, key);
};

self.crypto.verify = self.crypto.verify || function(algorithm, key, signature, buffer) {
  return new CryptoOperation('verify', algorithm, key);
};

self.crypto.digest = self.crypto.digest || function(algorithm, buffer) {
  return new CryptoOperation('digest', algorithm);
};

self.crypto.generateKey = self.crypto.generateKey || function(algorithm, extractable, keyUsages) {
  return new KeyOperation('generateKey', algorithm);
};

self.crypto.deriveKey = self.crypto.deriveKey || function(algorithm, baseKey, derivedKeyType, extractable, keyUsages) {

};

self.crypto.importKey = self.crypto.importKey || function(format, keyData, algorithm, extractable, keyUsages) {

};

self.crypto.exportKey = self.crypto.exportKey || function(format, key) {

};

self.crypto.getRandomValues = self.crypto.getRandomValues || function(array) {

};

/**
 *
 * http://www.w3.org/TR/WebCryptoAPI/#cryptooperation-interface
 */
function CryptoOperation(type, algorithm, key) {

  this.key = key;
  this.algorithm = algorithm;
  this.result = null;
}

CryptoOperation.prototype = {

  /**
   *
   * http://www.w3.org/TR/WebCryptoAPI/#CryptoOperation-method-process
   */
  process: function(buffer) {

  },

  /**
   *
   * http://www.w3.org/TR/WebCryptoAPI/#CryptoOperation-method-finish
   */
  finish: function() {

  },

  /**
   *
   * http://www.w3.org/TR/WebCryptoAPI/#CryptoOperation-method-abort
   */
  abort: function() {

  }
};

/**
 *
 * http://www.w3.org/TR/WebCryptoAPI/#KeyOperation-interface
 */
function KeyOperation() {

  this.result = null;
}

