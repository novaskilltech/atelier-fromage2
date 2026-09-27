const fs = require("fs");

function patch(target) {
  if (!target) return;
  const orig = target.readlink;
  if (orig) {
    target.readlink = function (path, opt, cb) {
      const callback = typeof opt === "function" ? opt : cb;
      const options = typeof opt === "function" ? undefined : opt;
      return orig.call(target, path, options, (err, link) => {
        if (err && (err.code === "EISDIR" || err.code === "UNKNOWN")) {
          const e = new Error(`EINVAL: invalid argument, readlink '${path}'`);
          e.code = "EINVAL";
          return callback(e, link);
        }
        callback(err, link);
      });
    };
  }

  const origSync = target.readlinkSync;
  if (origSync) {
    target.readlinkSync = function (path, opt) {
      try {
        return origSync.call(target, path, opt);
      } catch (err) {
        if (err && (err.code === "EISDIR" || err.code === "UNKNOWN")) {
          const e = new Error(`EINVAL: invalid argument, readlink '${path}'`);
          e.code = "EINVAL";
          throw e;
        }
        throw err;
      }
    };
  }
}

patch(fs);
if (fs.promises) {
  const origPromise = fs.promises.readlink;
  if (origPromise) {
    fs.promises.readlink = async function (path, opt) {
      try {
        return await origPromise.call(fs.promises, path, opt);
      } catch (err) {
        if (err && (err.code === "EISDIR" || err.code === "UNKNOWN")) {
          const e = new Error(`EINVAL: invalid argument, readlink '${path}'`);
          e.code = "EINVAL";
          throw e;
        }
        throw err;
      }
    };
  }
}
