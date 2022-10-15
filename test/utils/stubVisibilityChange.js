/*
 Copyright 2022 Google LLC
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     https://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

/**
 * Overrides the document's `visibilityState` property, sets the body's hidden
 * attribute (to prevent painting) and dispatches a `visibilitychange` event.
 * @param {string} visibilityState
 * @return {Promise<void>}
 */
export function stubVisibilityChange(visibilityState) {
  return browser.execute((visibilityState) => {
    self.__stubVisibilityChange(visibilityState);
  }, visibilityState);
}
