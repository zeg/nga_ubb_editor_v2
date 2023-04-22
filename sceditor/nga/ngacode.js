sceditor.formats.bbcode
    .set("h", {
        tags: {
            h4: {
                'class': ['subtitle']
            }
        },
        format: "[h]{0}[/h]",
        html: '<h4 class="subtitle">{0}</h4>',
        isInline: false,
        allowsEmpty: true,
        strictMatch: true,
        breakAfter:true,
    })

    .set("align", {
        tags: {
            styles: {
                'text-align': ['right', '-webkit-right', '-moz-right', '-khtml-right', 'center', '-webkit-center', '-moz-center', '-khtml-center', 'left', '-webkit-left', '-moz-left', '-khtml-left'],
            },
        },
        html: function (element, attrs, content) {
            return `<div style="text-align:${attrs.defaultattr}">${content}</div>`;
        },
        isInline: false,
        allowsEmpty: true,
    })

    .set("collapse", {
        tags: {
            div: {
                'class': ['collapse']
            }
        },
        format: function (element, content) {
            const collapseId = $(element).data('collapse-id');
            const attr = collapseId && collapseId !== '点击显示隐藏的内容' ? `=${collapseId}` : '';

            return `[collapse${attr}]${content}[/collapse]`;
        },
        html: function (element, attrs, content) {
            const defaultCollapse = attrs.defaultattr || '点击显示隐藏的内容';
            const randomId = Math.ceil(Math.random() * 1000);

            return `<div class="collapse_title sceditor-ignore"
                    onclick="const t=document.getElementById('collapse${randomId}');t.style.display=t.style.display==='none'?'block':'none';this.className=t.style.display==='none'?'collapse_title sceditor-ignore':'collapse_title2 sceditor-ignore'">
                    ${defaultCollapse}
                  </div>
                  <div class="collapse" style="display:none" id="collapse${randomId}" data-collapse-id="${defaultCollapse}">
                    ${content}
                  </div>`;
        },
        strictMatch:true,
        isInline:false,
    })

