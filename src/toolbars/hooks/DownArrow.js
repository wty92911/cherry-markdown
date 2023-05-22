/**
 * Copyright (C) 2021 THL A29 Limited, a Tencent company.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import MenuBase from '@/toolbars/MenuBase';
/**
 * 下箭头按钮，用来快速回到页面底部
 *
 */
export default class DownArrow extends MenuBase {
  constructor($cherry) {
    super($cherry);
    this.previewer = $cherry.previewer;
    this.editor = $cherry.editor;
    this.isLoading = false;
    this.updateMarkdown = false;
    this.setName('downarrow', 'downarrow');
  }
  /**
   * 响应点击事件
   * 该按钮不会引发编辑区域的内容改动，所以不用处理用户在编辑区域的选中内容
   *
   */
  onClick() {
    this.previewer.scrollToLineNum(null);
    this.editor.scrollToLineNum(null, null, 1);
  }
}
