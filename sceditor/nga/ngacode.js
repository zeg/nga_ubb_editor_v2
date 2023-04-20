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
            return '<div style="text-align:' + attrs.defaultattr + '">' + content + '</div>';
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

            var attr = '';
            if ($(element).data('collapse-id')) {
                attr = '=' + $(element).data('collapse-id')
            }

            if (attr === '=点击显示隐藏的内容') {
                attr = '';
            }

            return '[collapse' + attr + ']' + content + '[/collapse]';
        },
        html: function (element, attrs, content) {
            var idcollapse = '点击显示隐藏的内容';

            if (attrs.defaultattr) {
                idcollapse = attrs.defaultattr;
            }

            var randid = Math.ceil(Math.random() * 1000);

            var onc = "var t=document.getElementById('collapse" + randid + "');if(t.style.display=='none'){t.style.display='block';this.className='collapse_title2 sceditor-ignore'}else{t.style.display='none';this.className='collapse_title sceditor-ignore'}";

            return '<div class="collapse_title sceditor-ignore" onclick="' + onc + '">' + idcollapse + '</div><div class="collapse" style="display:none" id="collapse' + randid + '" data-collapse-id="' + idcollapse + '">' + content + '</div>';
        },
        strictMatch:true,
        isInline:false,
    })

