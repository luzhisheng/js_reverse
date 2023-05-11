from setting import PLACEHOLDER
from w3lib.html import remove_tags


class BaseExtractor(object):

    def parse_paragraph(self, selector, content_list, tag='p'):
        """
        arguemnts:
        selector: scrapy.Selector.
        content_list: article content list.
        tag: paragraph tag.
        """
        text = ''.join(selector.css(tag).xpath(
            'node()').extract()).strip()
        if text:
            text = remove_tags(
                text, which_ones=('a', 'meta', 'script', 'span'))
            content_list.append(text)

    def parse_image(self, **kwargs):
        '''
        arguemnts:
        selector: scrapy.Selector.
        src: image src css path.
        desc: description css path, if desc_path doesn't
                   exist, then description is a empty string.
        content: article content list.
        resource: article resource list.
        count: image counter.
        '''
        kwargs['type'] = 'image'
        return self.parse_resource(**kwargs)

    def parse_resource(self, **kwargs):
        placeholder = PLACEHOLDER[kwargs['type']]
        count = kwargs['count']
        content_list = kwargs['content']
        resource_list = kwargs['resource']
        sel = kwargs['selector']
        src = '@src'
        if 'src_attr' in kwargs:
            src = kwargs['src_attr']
        src = sel.css(kwargs['src']).xpath(src).extract()
        desc = ''
        if 'desc' in kwargs:
            desc = ''.join(sel.css(kwargs['desc']).extract()).strip()
        if len(src) > 1:
            for s in src:
                ref = placeholder.format(count)
                res = {'src': s, 'desc': desc, 'ref': ref}
                resource_list.append(res)
                content_list.append(ref)
                count += 1
            return count
        src = src[0]
        if not src:
            return count
        ref = placeholder.format(count)
        count += 1
        res = {'ref': ref, 'src': src, 'desc': desc}
        resource_list.append(res)
        content_list.append(res['ref'])
        return count
