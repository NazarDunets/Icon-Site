import { Component, Input, SimpleChanges } from '@angular/core';
import { Icon } from './../../shared/models/icon.model';
import {
    mdiAccountCircle,
    mdiAccountGroup,
    mdiAccountMultiple,
    mdiAccountPlus,
    mdiAlertCircle,
    mdiAndroid,
    mdiAngular,
    mdiAngularjs,
    mdiArchiveSync,
    mdiArrowUpThick,
    mdiAsterisk,
    mdiBookOpenVariant,
    mdiBootstrap,
    mdiCheck,
    mdiCheckboxBlankOutline,
    mdiCheckboxMarked,
    mdiCheckboxMarkedOutline,
    mdiChevronDown,
    mdiChevronLeft,
    mdiChevronRight,
    mdiChevronUp,
    mdiClock,
    mdiClose,
    mdiCodeBraces,
    mdiCommentAccount,
    mdiCommentOutline,
    mdiContentCopy,
    mdiContentSave,
    mdiDelete,
    mdiDownload,
    mdiEmailOutline,
    mdiEmber,
    mdiEmoticonHappy,
    mdiEye,
    mdiEyeOff,
    mdiFileDocument,
    mdiFileTree,
    mdiFilter,
    mdiFormatLetterCase,
    mdiFormatListChecks,
    mdiGithub,
    mdiGoogle,
    mdiGrid,
    mdiHeart,
    mdiHistory,
    mdiHome,
    mdiHomeAssistant,
    mdiHuman,
    mdiInformationOutline,
    mdiLanguageHtml5,
    mdiLanguagePhp,
    mdiLanguageRubyOnRails,
    mdiLightbulbOn,
    mdiMagnify,
    mdiMenuDown,
    mdiMenuUp,
    mdiMicrosoftVisualStudioCode,
    mdiMicrosoftWindows,
    mdiNewspaper,
    mdiNodejs,
    mdiOpenInNew,
    mdiPencil,
    mdiPlusBox,
    mdiPlusBoxOutline,
    mdiPlusCircle,
    mdiPlusCircleOutline,
    mdiPolymer,
    mdiPuzzleOutline,
    mdiReact,
    mdiRenameBox,
    mdiScaleBalance,
    mdiSelectCompare,
    mdiStar,
    mdiSvg,
    mdiTagMinus,
    mdiTagPlus,
    mdiTextBox,
    mdiTextBoxOutline,
    mdiThumbUpOutline,
    mdiTooltipText,
    mdiVuejs,
    mdiWeb,
    mdiWebpack,
    mdiXamarin,
} from '@mdi/js'

@Component({
  selector: 'mdi-icon',
  templateUrl: './icon.component.html'
})
export class IconComponent  {
    @Input('name') iconName: string;
    @Input('size') iconSize: number = 1;

    icons: Icon[] = [
        new Icon('account-circle', mdiAccountCircle),
        new Icon('account-group', mdiAccountGroup),
        new Icon('account-multiple', mdiAccountMultiple),
        new Icon('account-plus', mdiAccountPlus),
        new Icon('alert-circle', mdiAlertCircle),
        new Icon('android', mdiAndroid),
        new Icon('angular', mdiAngular),
        new Icon('angularjs', mdiAngularjs),
        new Icon('archive-sync', mdiArchiveSync),
        new Icon('arrow-up-thick', mdiArrowUpThick),
        new Icon('format-list-checks', mdiFormatListChecks),
        new Icon('asterisk', mdiAsterisk),
        new Icon('book-open-variant', mdiBookOpenVariant),
        new Icon('bootstrap', mdiBootstrap),
        new Icon('chevron-left', mdiChevronLeft),
        new Icon('chevron-right', mdiChevronRight),
        new Icon('chevron-down', mdiChevronDown),
        new Icon('chevron-up', mdiChevronUp),
        new Icon('check', mdiCheck),
        new Icon('checkbox-marked', mdiCheckboxMarked),
        new Icon('checkbox-marked-outline', mdiCheckboxMarkedOutline),
        new Icon('checkbox-blank-outline', mdiCheckboxBlankOutline),
        new Icon('clock', mdiClock),
        new Icon('close', mdiClose),
        new Icon('code-braces', mdiCodeBraces),
        new Icon('comment-account', mdiCommentAccount),
        new Icon('comment-outline', mdiCommentOutline),
        new Icon('content-copy', mdiContentCopy),
        new Icon('content-save', mdiContentSave),
        new Icon('delete', mdiDelete),
        new Icon('download', mdiDownload),
        new Icon('ember', mdiEmber),
        new Icon('email-outline', mdiEmailOutline),
        new Icon('eye', mdiEye),
        new Icon('eye-off', mdiEyeOff),
        new Icon('file-tree', mdiFileTree),
        new Icon('file-document', mdiFileDocument),
        new Icon('file-document-box-outline', mdiTextBoxOutline),
        new Icon('filter', mdiFilter),
        new Icon('format-letter-case', mdiFormatLetterCase),
        new Icon('format-list', 'M3,4H7V8H3V4M9,5V7H21V5H9M3,10H7V14H3V10M9,11V13H21V11H9M3,16H7V20H3V16M9,17V19H21V17H9'),
        new Icon('format-list-check', 'M14,10H2V12H14V10M14,6H2V8H14V6M2,16H10V14H2V16M21.5,11.5L23,13L16,20L11.5,15.5L13,14L16,17L21.5,11.5Z'),
        new Icon('github', mdiGithub),
        new Icon('google', mdiGoogle),
        new Icon('grid', mdiGrid),
        new Icon('heart', mdiHeart),
        new Icon('history', mdiHistory),
        new Icon('home', mdiHome),
        new Icon('home-assistant', mdiHomeAssistant),
        new Icon('html', mdiLanguageHtml5),
        new Icon('iconify', mdiEmoticonHappy),
        new Icon('information-outline', mdiInformationOutline),
        new Icon('lightbulb-on', mdiLightbulbOn),
        new Icon('magnify', mdiMagnify),
        new Icon('menu-down', mdiMenuDown),
        new Icon('menu-up', mdiMenuUp),
        new Icon('news', mdiNewspaper),
        new Icon('nodejs', mdiNodejs),
        new Icon('language-php', mdiLanguagePhp),
        new Icon('open-in-new', mdiOpenInNew),
        new Icon('pencil', mdiPencil),
        new Icon('pictogrammers', 'M6.613,2h10.906c1.51,0,2.726,1.217,2.726,2.726v14.547c0,1.51-1.217,2.726-2.726,2.726H6.613c-1.51,0-2.726-1.217-2.726-2.726V4.726C3.887,3.225,5.112,2,6.613,2z M6.613,3.821c-0.5,0-0.906,0.406-0.906,0.906v10.906c0,0.5,0.406,0.906,0.906,0.906h10.906c0.5,0,0.906-0.406,0.906-0.906V4.726c0-0.5-0.406-0.906-0.906-0.906H6.613z M5.708,19.274c0,0.5,0.406,0.906,0.906,0.906h10.906c0.5,0,0.906-0.406,0.906-0.906v-1.061c-0.285,0.095-0.587,0.155-0.906,0.155H6.613c-0.319,0-0.621-0.052-0.906-0.155V19.274z M11.195,11.344v2.476H9.426V6.504h2.925c0.561,0,1.061,0.104,1.484,0.311c0.431,0.207,0.768,0.5,1.001,0.88c0.233,0.38,0.354,0.811,0.354,1.303c0,0.716-0.25,1.286-0.768,1.717c-0.518,0.431-1.217,0.647-2.105,0.647L11.195,11.344L11.195,11.344z M11.204,10.007h1.156c0.345,0,0.604-0.086,0.785-0.259c0.181-0.173,0.276-0.423,0.276-0.742c0-0.354-0.095-0.63-0.276-0.837c-0.181-0.207-0.431-0.319-0.751-0.319h-1.182L11.204,10.007L11.204,10.007z'),
        new Icon('plus-box-outline', mdiPlusBoxOutline),
        new Icon('plus-box', mdiPlusBox),
        new Icon('plus-circle', mdiPlusCircle),
        new Icon('plus-circle-outline', mdiPlusCircleOutline),
        new Icon('puzzle-outline', mdiPuzzleOutline),
        new Icon('polymer', mdiPolymer),
        new Icon('react', mdiReact),
        new Icon('rename-box', mdiRenameBox),
        new Icon('rollupjs', 'M19.46,8.64C19.46,11.11 18.11,13.26 16.12,14.4C16,14.5 15.93,14.66 16,14.81L19.41,21.55C19.5,21.76 19.36,22 19.13,22H6.1L6.17,21.96C6.66,21.68 10.06,14.97 13.38,11.79C16.7,8.61 17.12,9.67 15.29,6.21C15.29,6.21 16.7,8.96 15.5,9.17C14.56,9.34 12.4,7.25 13.2,5.37C14,3.53 17.15,3.88 18.6,5.38C19.15,6.34 19.46,7.45 19.46,8.64M7.16,13.13C5.84,15.56 5,17.33 4.54,18.57V2.31C4.54,2.14 4.68,2 4.85,2H12.92C15.26,2.04 17.31,3.28 18.46,5.15C17.62,4.1 16.3,3.5 15,3.5C12.53,3.5 11.91,4.4 7.16,13.13Z'),
        new Icon('ruby-on-rails', mdiLanguageRubyOnRails),
        new Icon('scale-balance', mdiScaleBalance),
        new Icon('select-compare', mdiSelectCompare),
        new Icon('star', mdiStar),
        new Icon('svg', mdiSvg),
        new Icon('tag-plus', mdiTagPlus),
        new Icon('tag-minus', mdiTagMinus),
        new Icon('thumb-up-outline', mdiThumbUpOutline),
        new Icon('tooltip-text', mdiTooltipText),
        new Icon('textbox', mdiTextBox),
        new Icon('vuejs', mdiVuejs),
        new Icon('web', mdiWeb),
        new Icon('webpack', mdiWebpack),
        new Icon('windows', mdiMicrosoftWindows),
        new Icon('human', mdiHuman),
        new Icon('xamarin', mdiXamarin),
        new Icon('visual-studio-code', mdiMicrosoftVisualStudioCode)
    ]

    setIcon (name: string, size: number = 1) {
        var icon = this.icons.find((value) => value.name == name);
        if (icon == undefined) {
            console.error(`Icon "${name}" not found. Defaulting to alert icon.`);
        } else {
            this.data = icon.data;
            this.name = icon.name;
            this.size = size * 24;
        }
    }

    data: string = 'M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z';
    name: string = 'error';
    size: number = 1;

    ngOnChanges(changes: SimpleChanges){
        this.setIcon(changes.iconName.currentValue, changes.iconSize?.currentValue);
    }
}
