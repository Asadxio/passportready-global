/**
 * js/icons.js
 * Accessible SVG icon system for PassportReady Global.
 * Replaces functional emojis with accessible, high-contrast vector SVGs.
 * All icons render with aria-hidden="true" and focusable="false" by default.
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.PassportIcons = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var SVGS = {
    // Checkmark (verified, trust badges, checklist ticks)
    check: '<svg class="svg-icon svg-icon-check" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" fill="currentColor"/></svg>',

    // Warning Triangle (alerts, caveats, demo banner, mismatch notices)
    warning: '<svg class="svg-icon svg-icon-warning" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" fill="currentColor"/></svg>',

    // Padlock (100% client-side privacy, encryption, zero data retention)
    lock: '<svg class="svg-icon svg-icon-lock" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" fill="currentColor"/></svg>',

    // Megaphone (report fee / rule updates, feedback)
    megaphone: '<svg class="svg-icon svg-icon-megaphone" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.39l6.553 3.276A1 1 0 0018 15V3z" clip-rule="evenodd" fill="currentColor"/></svg>',

    // Camera (biometric photo validator, portrait guides)
    camera: '<svg class="svg-icon svg-icon-camera" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" fill="currentColor"/></svg>',

    // Search / Magnifying Glass (country selector, directory filter)
    search: '<svg class="svg-icon svg-icon-search" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" fill="currentColor"/></svg>',

    // Copy / Clipboard (export text, copy checklist)
    copy: '<svg class="svg-icon svg-icon-copy" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"/><path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-2V5H5v11h4v2H5a2 2 0 01-2-2V5z"/><path d="M15 11h-4a1 1 0 00-1 1v6a1 1 0 001 1h4a1 1 0 001-1v-6a1 1 0 00-1-1z" fill="currentColor"/></svg>',

    // Download / Save (download JSON, save progress)
    download: '<svg class="svg-icon svg-icon-download" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" fill="currentColor"/></svg>',

    // Save Disk (local storage save progress)
    save: '<svg class="svg-icon svg-icon-save" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293z" fill="currentColor"/><path d="M5 3a2 2 0 00-2 2v1h14V5a2 2 0 00-2-2H5z" fill="currentColor"/></svg>',

    // Share / Link (deep link copy, shareable checklist)
    share: '<svg class="svg-icon svg-icon-share" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" fill="currentColor"/></svg>',

    // External Link (open official portal)
    externalLink: '<svg class="svg-icon svg-icon-external" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" fill="currentColor"/><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" fill="currentColor"/></svg>',

    // Airplane (validity calculator, flight travel dates)
    plane: '<svg class="svg-icon svg-icon-plane" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" fill="currentColor"/></svg>',

    // Scales of Justice (name discrepancy analyzer, legal verification)
    scale: '<svg class="svg-icon svg-icon-scale" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-.982 1 1 0 01-.285-1.05l1.715-5.349L11 6.516V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.516L6.237 7.619l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-.982 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clip-rule="evenodd" fill="currentColor"/></svg>',

    // Calendar (date ambiguity, non-Gregorian converter)
    calendar: '<svg class="svg-icon svg-icon-calendar" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" fill="currentColor"/></svg>',

    // Question Mark / Help (approximate DOB helper)
    help: '<svg class="svg-icon svg-icon-help" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 10-1-1zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" fill="currentColor"/></svg>',

    // Folder / Upload (upload photo)
    folder: '<svg class="svg-icon svg-icon-folder" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" fill="currentColor"/></svg>',

    // Government / Authority (sovereign passport authority card)
    government: '<svg class="svg-icon svg-icon-gov" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" fill="currentColor"/></svg>',

    // Trash / Clear (Clear My Data button)
    trash: '<svg class="svg-icon svg-icon-trash" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" fill="currentColor"/></svg>',

    // Refresh / Reset (Start over)
    refresh: '<svg class="svg-icon svg-icon-refresh" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" fill="currentColor"/></svg>',

    // Sparkle (Brand mark)
    sparkle: '<svg class="svg-icon svg-icon-sparkle" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor"/></svg>',

    // Bolt (Offline ready / PWA status)
    bolt: '<svg class="svg-icon svg-icon-bolt" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" fill="currentColor"/></svg>',

    // Document / File (Checklist item)
    document: '<svg class="svg-icon svg-icon-doc" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" fill="currentColor"/></svg>',

    // GitHub (source repo link)
    github: '<svg class="svg-icon svg-icon-github" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" fill="currentColor"/></svg>'
  };

  return {
    get: function (name) {
      return SVGS[name] || '';
    },
    getAll: function () {
      return SVGS;
    }
  };
}));
