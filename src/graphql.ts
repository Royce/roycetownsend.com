export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type BlogPost = {
  id: Scalars['ID'];
  title: Scalars['String'];
  body: Scalars['String'];
  slug: Scalars['String'];
  redirectFrom: Array<Maybe<Scalars['String']>>;
  date: Scalars['Date'];
  tags: Array<Maybe<Scalars['String']>>;
  excerpt: Scalars['String'];
  image?: Maybe<File>;
  imageAlt?: Maybe<Scalars['String']>;
};


export type BlogPostDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type BlogPostConnection = {
  __typename?: 'BlogPostConnection';
  totalCount: Scalars['Int'];
  edges: Array<BlogPostEdge>;
  nodes: Array<BlogPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<BlogPostGroupConnection>;
};


export type BlogPostConnectionDistinctArgs = {
  field: BlogPostFieldsEnum;
};


export type BlogPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: BlogPostFieldsEnum;
};

export type BlogPostEdge = {
  __typename?: 'BlogPostEdge';
  next?: Maybe<BlogPost>;
  node: BlogPost;
  previous?: Maybe<BlogPost>;
};

export enum BlogPostFieldsEnum {
  Id = 'id',
  Title = 'title',
  Body = 'body',
  Slug = 'slug',
  RedirectFrom = 'redirectFrom',
  Date = 'date',
  Tags = 'tags',
  Excerpt = 'excerpt',
  ImageSourceInstanceName = 'image___sourceInstanceName',
  ImageAbsolutePath = 'image___absolutePath',
  ImageRelativePath = 'image___relativePath',
  ImageExtension = 'image___extension',
  ImageSize = 'image___size',
  ImagePrettySize = 'image___prettySize',
  ImageModifiedTime = 'image___modifiedTime',
  ImageAccessTime = 'image___accessTime',
  ImageChangeTime = 'image___changeTime',
  ImageBirthTime = 'image___birthTime',
  ImageRoot = 'image___root',
  ImageDir = 'image___dir',
  ImageBase = 'image___base',
  ImageExt = 'image___ext',
  ImageName = 'image___name',
  ImageRelativeDirectory = 'image___relativeDirectory',
  ImageDev = 'image___dev',
  ImageMode = 'image___mode',
  ImageNlink = 'image___nlink',
  ImageUid = 'image___uid',
  ImageGid = 'image___gid',
  ImageRdev = 'image___rdev',
  ImageIno = 'image___ino',
  ImageAtimeMs = 'image___atimeMs',
  ImageMtimeMs = 'image___mtimeMs',
  ImageCtimeMs = 'image___ctimeMs',
  ImageAtime = 'image___atime',
  ImageMtime = 'image___mtime',
  ImageCtime = 'image___ctime',
  ImageBirthtime = 'image___birthtime',
  ImageBirthtimeMs = 'image___birthtimeMs',
  ImageBlksize = 'image___blksize',
  ImageBlocks = 'image___blocks',
  ImagePublicUrl = 'image___publicURL',
  ImageChildrenImageSharp = 'image___childrenImageSharp',
  ImageChildrenImageSharpFixedBase64 = 'image___childrenImageSharp___fixed___base64',
  ImageChildrenImageSharpFixedTracedSvg = 'image___childrenImageSharp___fixed___tracedSVG',
  ImageChildrenImageSharpFixedAspectRatio = 'image___childrenImageSharp___fixed___aspectRatio',
  ImageChildrenImageSharpFixedWidth = 'image___childrenImageSharp___fixed___width',
  ImageChildrenImageSharpFixedHeight = 'image___childrenImageSharp___fixed___height',
  ImageChildrenImageSharpFixedSrc = 'image___childrenImageSharp___fixed___src',
  ImageChildrenImageSharpFixedSrcSet = 'image___childrenImageSharp___fixed___srcSet',
  ImageChildrenImageSharpFixedSrcWebp = 'image___childrenImageSharp___fixed___srcWebp',
  ImageChildrenImageSharpFixedSrcSetWebp = 'image___childrenImageSharp___fixed___srcSetWebp',
  ImageChildrenImageSharpFixedOriginalName = 'image___childrenImageSharp___fixed___originalName',
  ImageChildrenImageSharpResolutionsBase64 = 'image___childrenImageSharp___resolutions___base64',
  ImageChildrenImageSharpResolutionsTracedSvg = 'image___childrenImageSharp___resolutions___tracedSVG',
  ImageChildrenImageSharpResolutionsAspectRatio = 'image___childrenImageSharp___resolutions___aspectRatio',
  ImageChildrenImageSharpResolutionsWidth = 'image___childrenImageSharp___resolutions___width',
  ImageChildrenImageSharpResolutionsHeight = 'image___childrenImageSharp___resolutions___height',
  ImageChildrenImageSharpResolutionsSrc = 'image___childrenImageSharp___resolutions___src',
  ImageChildrenImageSharpResolutionsSrcSet = 'image___childrenImageSharp___resolutions___srcSet',
  ImageChildrenImageSharpResolutionsSrcWebp = 'image___childrenImageSharp___resolutions___srcWebp',
  ImageChildrenImageSharpResolutionsSrcSetWebp = 'image___childrenImageSharp___resolutions___srcSetWebp',
  ImageChildrenImageSharpResolutionsOriginalName = 'image___childrenImageSharp___resolutions___originalName',
  ImageChildrenImageSharpFluidBase64 = 'image___childrenImageSharp___fluid___base64',
  ImageChildrenImageSharpFluidTracedSvg = 'image___childrenImageSharp___fluid___tracedSVG',
  ImageChildrenImageSharpFluidAspectRatio = 'image___childrenImageSharp___fluid___aspectRatio',
  ImageChildrenImageSharpFluidSrc = 'image___childrenImageSharp___fluid___src',
  ImageChildrenImageSharpFluidSrcSet = 'image___childrenImageSharp___fluid___srcSet',
  ImageChildrenImageSharpFluidSrcWebp = 'image___childrenImageSharp___fluid___srcWebp',
  ImageChildrenImageSharpFluidSrcSetWebp = 'image___childrenImageSharp___fluid___srcSetWebp',
  ImageChildrenImageSharpFluidSizes = 'image___childrenImageSharp___fluid___sizes',
  ImageChildrenImageSharpFluidOriginalImg = 'image___childrenImageSharp___fluid___originalImg',
  ImageChildrenImageSharpFluidOriginalName = 'image___childrenImageSharp___fluid___originalName',
  ImageChildrenImageSharpFluidPresentationWidth = 'image___childrenImageSharp___fluid___presentationWidth',
  ImageChildrenImageSharpFluidPresentationHeight = 'image___childrenImageSharp___fluid___presentationHeight',
  ImageChildrenImageSharpSizesBase64 = 'image___childrenImageSharp___sizes___base64',
  ImageChildrenImageSharpSizesTracedSvg = 'image___childrenImageSharp___sizes___tracedSVG',
  ImageChildrenImageSharpSizesAspectRatio = 'image___childrenImageSharp___sizes___aspectRatio',
  ImageChildrenImageSharpSizesSrc = 'image___childrenImageSharp___sizes___src',
  ImageChildrenImageSharpSizesSrcSet = 'image___childrenImageSharp___sizes___srcSet',
  ImageChildrenImageSharpSizesSrcWebp = 'image___childrenImageSharp___sizes___srcWebp',
  ImageChildrenImageSharpSizesSrcSetWebp = 'image___childrenImageSharp___sizes___srcSetWebp',
  ImageChildrenImageSharpSizesSizes = 'image___childrenImageSharp___sizes___sizes',
  ImageChildrenImageSharpSizesOriginalImg = 'image___childrenImageSharp___sizes___originalImg',
  ImageChildrenImageSharpSizesOriginalName = 'image___childrenImageSharp___sizes___originalName',
  ImageChildrenImageSharpSizesPresentationWidth = 'image___childrenImageSharp___sizes___presentationWidth',
  ImageChildrenImageSharpSizesPresentationHeight = 'image___childrenImageSharp___sizes___presentationHeight',
  ImageChildrenImageSharpGatsbyImageData = 'image___childrenImageSharp___gatsbyImageData',
  ImageChildrenImageSharpOriginalWidth = 'image___childrenImageSharp___original___width',
  ImageChildrenImageSharpOriginalHeight = 'image___childrenImageSharp___original___height',
  ImageChildrenImageSharpOriginalSrc = 'image___childrenImageSharp___original___src',
  ImageChildrenImageSharpResizeSrc = 'image___childrenImageSharp___resize___src',
  ImageChildrenImageSharpResizeTracedSvg = 'image___childrenImageSharp___resize___tracedSVG',
  ImageChildrenImageSharpResizeWidth = 'image___childrenImageSharp___resize___width',
  ImageChildrenImageSharpResizeHeight = 'image___childrenImageSharp___resize___height',
  ImageChildrenImageSharpResizeAspectRatio = 'image___childrenImageSharp___resize___aspectRatio',
  ImageChildrenImageSharpResizeOriginalName = 'image___childrenImageSharp___resize___originalName',
  ImageChildrenImageSharpId = 'image___childrenImageSharp___id',
  ImageChildrenImageSharpParentId = 'image___childrenImageSharp___parent___id',
  ImageChildrenImageSharpParentChildren = 'image___childrenImageSharp___parent___children',
  ImageChildrenImageSharpChildren = 'image___childrenImageSharp___children',
  ImageChildrenImageSharpChildrenId = 'image___childrenImageSharp___children___id',
  ImageChildrenImageSharpChildrenChildren = 'image___childrenImageSharp___children___children',
  ImageChildrenImageSharpInternalContent = 'image___childrenImageSharp___internal___content',
  ImageChildrenImageSharpInternalContentDigest = 'image___childrenImageSharp___internal___contentDigest',
  ImageChildrenImageSharpInternalDescription = 'image___childrenImageSharp___internal___description',
  ImageChildrenImageSharpInternalFieldOwners = 'image___childrenImageSharp___internal___fieldOwners',
  ImageChildrenImageSharpInternalIgnoreType = 'image___childrenImageSharp___internal___ignoreType',
  ImageChildrenImageSharpInternalMediaType = 'image___childrenImageSharp___internal___mediaType',
  ImageChildrenImageSharpInternalOwner = 'image___childrenImageSharp___internal___owner',
  ImageChildrenImageSharpInternalType = 'image___childrenImageSharp___internal___type',
  ImageChildImageSharpFixedBase64 = 'image___childImageSharp___fixed___base64',
  ImageChildImageSharpFixedTracedSvg = 'image___childImageSharp___fixed___tracedSVG',
  ImageChildImageSharpFixedAspectRatio = 'image___childImageSharp___fixed___aspectRatio',
  ImageChildImageSharpFixedWidth = 'image___childImageSharp___fixed___width',
  ImageChildImageSharpFixedHeight = 'image___childImageSharp___fixed___height',
  ImageChildImageSharpFixedSrc = 'image___childImageSharp___fixed___src',
  ImageChildImageSharpFixedSrcSet = 'image___childImageSharp___fixed___srcSet',
  ImageChildImageSharpFixedSrcWebp = 'image___childImageSharp___fixed___srcWebp',
  ImageChildImageSharpFixedSrcSetWebp = 'image___childImageSharp___fixed___srcSetWebp',
  ImageChildImageSharpFixedOriginalName = 'image___childImageSharp___fixed___originalName',
  ImageChildImageSharpResolutionsBase64 = 'image___childImageSharp___resolutions___base64',
  ImageChildImageSharpResolutionsTracedSvg = 'image___childImageSharp___resolutions___tracedSVG',
  ImageChildImageSharpResolutionsAspectRatio = 'image___childImageSharp___resolutions___aspectRatio',
  ImageChildImageSharpResolutionsWidth = 'image___childImageSharp___resolutions___width',
  ImageChildImageSharpResolutionsHeight = 'image___childImageSharp___resolutions___height',
  ImageChildImageSharpResolutionsSrc = 'image___childImageSharp___resolutions___src',
  ImageChildImageSharpResolutionsSrcSet = 'image___childImageSharp___resolutions___srcSet',
  ImageChildImageSharpResolutionsSrcWebp = 'image___childImageSharp___resolutions___srcWebp',
  ImageChildImageSharpResolutionsSrcSetWebp = 'image___childImageSharp___resolutions___srcSetWebp',
  ImageChildImageSharpResolutionsOriginalName = 'image___childImageSharp___resolutions___originalName',
  ImageChildImageSharpFluidBase64 = 'image___childImageSharp___fluid___base64',
  ImageChildImageSharpFluidTracedSvg = 'image___childImageSharp___fluid___tracedSVG',
  ImageChildImageSharpFluidAspectRatio = 'image___childImageSharp___fluid___aspectRatio',
  ImageChildImageSharpFluidSrc = 'image___childImageSharp___fluid___src',
  ImageChildImageSharpFluidSrcSet = 'image___childImageSharp___fluid___srcSet',
  ImageChildImageSharpFluidSrcWebp = 'image___childImageSharp___fluid___srcWebp',
  ImageChildImageSharpFluidSrcSetWebp = 'image___childImageSharp___fluid___srcSetWebp',
  ImageChildImageSharpFluidSizes = 'image___childImageSharp___fluid___sizes',
  ImageChildImageSharpFluidOriginalImg = 'image___childImageSharp___fluid___originalImg',
  ImageChildImageSharpFluidOriginalName = 'image___childImageSharp___fluid___originalName',
  ImageChildImageSharpFluidPresentationWidth = 'image___childImageSharp___fluid___presentationWidth',
  ImageChildImageSharpFluidPresentationHeight = 'image___childImageSharp___fluid___presentationHeight',
  ImageChildImageSharpSizesBase64 = 'image___childImageSharp___sizes___base64',
  ImageChildImageSharpSizesTracedSvg = 'image___childImageSharp___sizes___tracedSVG',
  ImageChildImageSharpSizesAspectRatio = 'image___childImageSharp___sizes___aspectRatio',
  ImageChildImageSharpSizesSrc = 'image___childImageSharp___sizes___src',
  ImageChildImageSharpSizesSrcSet = 'image___childImageSharp___sizes___srcSet',
  ImageChildImageSharpSizesSrcWebp = 'image___childImageSharp___sizes___srcWebp',
  ImageChildImageSharpSizesSrcSetWebp = 'image___childImageSharp___sizes___srcSetWebp',
  ImageChildImageSharpSizesSizes = 'image___childImageSharp___sizes___sizes',
  ImageChildImageSharpSizesOriginalImg = 'image___childImageSharp___sizes___originalImg',
  ImageChildImageSharpSizesOriginalName = 'image___childImageSharp___sizes___originalName',
  ImageChildImageSharpSizesPresentationWidth = 'image___childImageSharp___sizes___presentationWidth',
  ImageChildImageSharpSizesPresentationHeight = 'image___childImageSharp___sizes___presentationHeight',
  ImageChildImageSharpGatsbyImageData = 'image___childImageSharp___gatsbyImageData',
  ImageChildImageSharpOriginalWidth = 'image___childImageSharp___original___width',
  ImageChildImageSharpOriginalHeight = 'image___childImageSharp___original___height',
  ImageChildImageSharpOriginalSrc = 'image___childImageSharp___original___src',
  ImageChildImageSharpResizeSrc = 'image___childImageSharp___resize___src',
  ImageChildImageSharpResizeTracedSvg = 'image___childImageSharp___resize___tracedSVG',
  ImageChildImageSharpResizeWidth = 'image___childImageSharp___resize___width',
  ImageChildImageSharpResizeHeight = 'image___childImageSharp___resize___height',
  ImageChildImageSharpResizeAspectRatio = 'image___childImageSharp___resize___aspectRatio',
  ImageChildImageSharpResizeOriginalName = 'image___childImageSharp___resize___originalName',
  ImageChildImageSharpId = 'image___childImageSharp___id',
  ImageChildImageSharpParentId = 'image___childImageSharp___parent___id',
  ImageChildImageSharpParentChildren = 'image___childImageSharp___parent___children',
  ImageChildImageSharpChildren = 'image___childImageSharp___children',
  ImageChildImageSharpChildrenId = 'image___childImageSharp___children___id',
  ImageChildImageSharpChildrenChildren = 'image___childImageSharp___children___children',
  ImageChildImageSharpInternalContent = 'image___childImageSharp___internal___content',
  ImageChildImageSharpInternalContentDigest = 'image___childImageSharp___internal___contentDigest',
  ImageChildImageSharpInternalDescription = 'image___childImageSharp___internal___description',
  ImageChildImageSharpInternalFieldOwners = 'image___childImageSharp___internal___fieldOwners',
  ImageChildImageSharpInternalIgnoreType = 'image___childImageSharp___internal___ignoreType',
  ImageChildImageSharpInternalMediaType = 'image___childImageSharp___internal___mediaType',
  ImageChildImageSharpInternalOwner = 'image___childImageSharp___internal___owner',
  ImageChildImageSharpInternalType = 'image___childImageSharp___internal___type',
  ImageChildrenMdx = 'image___childrenMdx',
  ImageChildrenMdxRawBody = 'image___childrenMdx___rawBody',
  ImageChildrenMdxFileAbsolutePath = 'image___childrenMdx___fileAbsolutePath',
  ImageChildrenMdxFrontmatterTitle = 'image___childrenMdx___frontmatter___title',
  ImageChildrenMdxFrontmatterExcerpt = 'image___childrenMdx___frontmatter___excerpt',
  ImageChildrenMdxFrontmatterDate = 'image___childrenMdx___frontmatter___date',
  ImageChildrenMdxFrontmatterImageAlt = 'image___childrenMdx___frontmatter___imageAlt',
  ImageChildrenMdxFrontmatterTags = 'image___childrenMdx___frontmatter___tags',
  ImageChildrenMdxFrontmatterRedirectFrom = 'image___childrenMdx___frontmatter___redirectFrom',
  ImageChildrenMdxSlug = 'image___childrenMdx___slug',
  ImageChildrenMdxBody = 'image___childrenMdx___body',
  ImageChildrenMdxExcerpt = 'image___childrenMdx___excerpt',
  ImageChildrenMdxHeadings = 'image___childrenMdx___headings',
  ImageChildrenMdxHeadingsValue = 'image___childrenMdx___headings___value',
  ImageChildrenMdxHeadingsDepth = 'image___childrenMdx___headings___depth',
  ImageChildrenMdxHtml = 'image___childrenMdx___html',
  ImageChildrenMdxMdxAst = 'image___childrenMdx___mdxAST',
  ImageChildrenMdxTableOfContents = 'image___childrenMdx___tableOfContents',
  ImageChildrenMdxTimeToRead = 'image___childrenMdx___timeToRead',
  ImageChildrenMdxWordCountParagraphs = 'image___childrenMdx___wordCount___paragraphs',
  ImageChildrenMdxWordCountSentences = 'image___childrenMdx___wordCount___sentences',
  ImageChildrenMdxWordCountWords = 'image___childrenMdx___wordCount___words',
  ImageChildrenMdxChildrenMdxBlogPost = 'image___childrenMdx___childrenMdxBlogPost',
  ImageChildrenMdxChildrenMdxBlogPostId = 'image___childrenMdx___childrenMdxBlogPost___id',
  ImageChildrenMdxChildrenMdxBlogPostTitle = 'image___childrenMdx___childrenMdxBlogPost___title',
  ImageChildrenMdxChildrenMdxBlogPostSlug = 'image___childrenMdx___childrenMdxBlogPost___slug',
  ImageChildrenMdxChildrenMdxBlogPostTags = 'image___childrenMdx___childrenMdxBlogPost___tags',
  ImageChildrenMdxChildrenMdxBlogPostDate = 'image___childrenMdx___childrenMdxBlogPost___date',
  ImageChildrenMdxChildrenMdxBlogPostRedirectFrom = 'image___childrenMdx___childrenMdxBlogPost___redirectFrom',
  ImageChildrenMdxChildrenMdxBlogPostExcerpt = 'image___childrenMdx___childrenMdxBlogPost___excerpt',
  ImageChildrenMdxChildrenMdxBlogPostImageAlt = 'image___childrenMdx___childrenMdxBlogPost___imageAlt',
  ImageChildrenMdxChildrenMdxBlogPostBody = 'image___childrenMdx___childrenMdxBlogPost___body',
  ImageChildrenMdxChildrenMdxBlogPostChildren = 'image___childrenMdx___childrenMdxBlogPost___children',
  ImageChildrenMdxChildMdxBlogPostId = 'image___childrenMdx___childMdxBlogPost___id',
  ImageChildrenMdxChildMdxBlogPostTitle = 'image___childrenMdx___childMdxBlogPost___title',
  ImageChildrenMdxChildMdxBlogPostSlug = 'image___childrenMdx___childMdxBlogPost___slug',
  ImageChildrenMdxChildMdxBlogPostTags = 'image___childrenMdx___childMdxBlogPost___tags',
  ImageChildrenMdxChildMdxBlogPostDate = 'image___childrenMdx___childMdxBlogPost___date',
  ImageChildrenMdxChildMdxBlogPostRedirectFrom = 'image___childrenMdx___childMdxBlogPost___redirectFrom',
  ImageChildrenMdxChildMdxBlogPostExcerpt = 'image___childrenMdx___childMdxBlogPost___excerpt',
  ImageChildrenMdxChildMdxBlogPostImageAlt = 'image___childrenMdx___childMdxBlogPost___imageAlt',
  ImageChildrenMdxChildMdxBlogPostBody = 'image___childrenMdx___childMdxBlogPost___body',
  ImageChildrenMdxChildMdxBlogPostChildren = 'image___childrenMdx___childMdxBlogPost___children',
  ImageChildrenMdxId = 'image___childrenMdx___id',
  ImageChildrenMdxParentId = 'image___childrenMdx___parent___id',
  ImageChildrenMdxParentChildren = 'image___childrenMdx___parent___children',
  ImageChildrenMdxChildren = 'image___childrenMdx___children',
  ImageChildrenMdxChildrenId = 'image___childrenMdx___children___id',
  ImageChildrenMdxChildrenChildren = 'image___childrenMdx___children___children',
  ImageChildrenMdxInternalContent = 'image___childrenMdx___internal___content',
  ImageChildrenMdxInternalContentDigest = 'image___childrenMdx___internal___contentDigest',
  ImageChildrenMdxInternalDescription = 'image___childrenMdx___internal___description',
  ImageChildrenMdxInternalFieldOwners = 'image___childrenMdx___internal___fieldOwners',
  ImageChildrenMdxInternalIgnoreType = 'image___childrenMdx___internal___ignoreType',
  ImageChildrenMdxInternalMediaType = 'image___childrenMdx___internal___mediaType',
  ImageChildrenMdxInternalOwner = 'image___childrenMdx___internal___owner',
  ImageChildrenMdxInternalType = 'image___childrenMdx___internal___type',
  ImageChildMdxRawBody = 'image___childMdx___rawBody',
  ImageChildMdxFileAbsolutePath = 'image___childMdx___fileAbsolutePath',
  ImageChildMdxFrontmatterTitle = 'image___childMdx___frontmatter___title',
  ImageChildMdxFrontmatterExcerpt = 'image___childMdx___frontmatter___excerpt',
  ImageChildMdxFrontmatterDate = 'image___childMdx___frontmatter___date',
  ImageChildMdxFrontmatterImageAlt = 'image___childMdx___frontmatter___imageAlt',
  ImageChildMdxFrontmatterTags = 'image___childMdx___frontmatter___tags',
  ImageChildMdxFrontmatterRedirectFrom = 'image___childMdx___frontmatter___redirectFrom',
  ImageChildMdxSlug = 'image___childMdx___slug',
  ImageChildMdxBody = 'image___childMdx___body',
  ImageChildMdxExcerpt = 'image___childMdx___excerpt',
  ImageChildMdxHeadings = 'image___childMdx___headings',
  ImageChildMdxHeadingsValue = 'image___childMdx___headings___value',
  ImageChildMdxHeadingsDepth = 'image___childMdx___headings___depth',
  ImageChildMdxHtml = 'image___childMdx___html',
  ImageChildMdxMdxAst = 'image___childMdx___mdxAST',
  ImageChildMdxTableOfContents = 'image___childMdx___tableOfContents',
  ImageChildMdxTimeToRead = 'image___childMdx___timeToRead',
  ImageChildMdxWordCountParagraphs = 'image___childMdx___wordCount___paragraphs',
  ImageChildMdxWordCountSentences = 'image___childMdx___wordCount___sentences',
  ImageChildMdxWordCountWords = 'image___childMdx___wordCount___words',
  ImageChildMdxChildrenMdxBlogPost = 'image___childMdx___childrenMdxBlogPost',
  ImageChildMdxChildrenMdxBlogPostId = 'image___childMdx___childrenMdxBlogPost___id',
  ImageChildMdxChildrenMdxBlogPostTitle = 'image___childMdx___childrenMdxBlogPost___title',
  ImageChildMdxChildrenMdxBlogPostSlug = 'image___childMdx___childrenMdxBlogPost___slug',
  ImageChildMdxChildrenMdxBlogPostTags = 'image___childMdx___childrenMdxBlogPost___tags',
  ImageChildMdxChildrenMdxBlogPostDate = 'image___childMdx___childrenMdxBlogPost___date',
  ImageChildMdxChildrenMdxBlogPostRedirectFrom = 'image___childMdx___childrenMdxBlogPost___redirectFrom',
  ImageChildMdxChildrenMdxBlogPostExcerpt = 'image___childMdx___childrenMdxBlogPost___excerpt',
  ImageChildMdxChildrenMdxBlogPostImageAlt = 'image___childMdx___childrenMdxBlogPost___imageAlt',
  ImageChildMdxChildrenMdxBlogPostBody = 'image___childMdx___childrenMdxBlogPost___body',
  ImageChildMdxChildrenMdxBlogPostChildren = 'image___childMdx___childrenMdxBlogPost___children',
  ImageChildMdxChildMdxBlogPostId = 'image___childMdx___childMdxBlogPost___id',
  ImageChildMdxChildMdxBlogPostTitle = 'image___childMdx___childMdxBlogPost___title',
  ImageChildMdxChildMdxBlogPostSlug = 'image___childMdx___childMdxBlogPost___slug',
  ImageChildMdxChildMdxBlogPostTags = 'image___childMdx___childMdxBlogPost___tags',
  ImageChildMdxChildMdxBlogPostDate = 'image___childMdx___childMdxBlogPost___date',
  ImageChildMdxChildMdxBlogPostRedirectFrom = 'image___childMdx___childMdxBlogPost___redirectFrom',
  ImageChildMdxChildMdxBlogPostExcerpt = 'image___childMdx___childMdxBlogPost___excerpt',
  ImageChildMdxChildMdxBlogPostImageAlt = 'image___childMdx___childMdxBlogPost___imageAlt',
  ImageChildMdxChildMdxBlogPostBody = 'image___childMdx___childMdxBlogPost___body',
  ImageChildMdxChildMdxBlogPostChildren = 'image___childMdx___childMdxBlogPost___children',
  ImageChildMdxId = 'image___childMdx___id',
  ImageChildMdxParentId = 'image___childMdx___parent___id',
  ImageChildMdxParentChildren = 'image___childMdx___parent___children',
  ImageChildMdxChildren = 'image___childMdx___children',
  ImageChildMdxChildrenId = 'image___childMdx___children___id',
  ImageChildMdxChildrenChildren = 'image___childMdx___children___children',
  ImageChildMdxInternalContent = 'image___childMdx___internal___content',
  ImageChildMdxInternalContentDigest = 'image___childMdx___internal___contentDigest',
  ImageChildMdxInternalDescription = 'image___childMdx___internal___description',
  ImageChildMdxInternalFieldOwners = 'image___childMdx___internal___fieldOwners',
  ImageChildMdxInternalIgnoreType = 'image___childMdx___internal___ignoreType',
  ImageChildMdxInternalMediaType = 'image___childMdx___internal___mediaType',
  ImageChildMdxInternalOwner = 'image___childMdx___internal___owner',
  ImageChildMdxInternalType = 'image___childMdx___internal___type',
  ImageId = 'image___id',
  ImageParentId = 'image___parent___id',
  ImageParentParentId = 'image___parent___parent___id',
  ImageParentParentChildren = 'image___parent___parent___children',
  ImageParentChildren = 'image___parent___children',
  ImageParentChildrenId = 'image___parent___children___id',
  ImageParentChildrenChildren = 'image___parent___children___children',
  ImageParentInternalContent = 'image___parent___internal___content',
  ImageParentInternalContentDigest = 'image___parent___internal___contentDigest',
  ImageParentInternalDescription = 'image___parent___internal___description',
  ImageParentInternalFieldOwners = 'image___parent___internal___fieldOwners',
  ImageParentInternalIgnoreType = 'image___parent___internal___ignoreType',
  ImageParentInternalMediaType = 'image___parent___internal___mediaType',
  ImageParentInternalOwner = 'image___parent___internal___owner',
  ImageParentInternalType = 'image___parent___internal___type',
  ImageChildren = 'image___children',
  ImageChildrenId = 'image___children___id',
  ImageChildrenParentId = 'image___children___parent___id',
  ImageChildrenParentChildren = 'image___children___parent___children',
  ImageChildrenChildren = 'image___children___children',
  ImageChildrenChildrenId = 'image___children___children___id',
  ImageChildrenChildrenChildren = 'image___children___children___children',
  ImageChildrenInternalContent = 'image___children___internal___content',
  ImageChildrenInternalContentDigest = 'image___children___internal___contentDigest',
  ImageChildrenInternalDescription = 'image___children___internal___description',
  ImageChildrenInternalFieldOwners = 'image___children___internal___fieldOwners',
  ImageChildrenInternalIgnoreType = 'image___children___internal___ignoreType',
  ImageChildrenInternalMediaType = 'image___children___internal___mediaType',
  ImageChildrenInternalOwner = 'image___children___internal___owner',
  ImageChildrenInternalType = 'image___children___internal___type',
  ImageInternalContent = 'image___internal___content',
  ImageInternalContentDigest = 'image___internal___contentDigest',
  ImageInternalDescription = 'image___internal___description',
  ImageInternalFieldOwners = 'image___internal___fieldOwners',
  ImageInternalIgnoreType = 'image___internal___ignoreType',
  ImageInternalMediaType = 'image___internal___mediaType',
  ImageInternalOwner = 'image___internal___owner',
  ImageInternalType = 'image___internal___type',
  ImageAlt = 'imageAlt'
}

export type BlogPostFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  redirectFrom?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<FileFilterInput>;
  imageAlt?: Maybe<StringQueryOperatorInput>;
};

export type BlogPostGroupConnection = {
  __typename?: 'BlogPostGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<BlogPostEdge>;
  nodes: Array<BlogPost>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type BlogPostSortInput = {
  fields?: Maybe<Array<Maybe<BlogPostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /**
   * Force the output format for the low-res preview. Default is to use the same
   * format as the input. You should rarely need to change this
   */
  toFormat?: Maybe<ImageFormat>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  __typename?: 'File';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx?: Maybe<Mdx>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  PublicUrl = 'publicURL',
  ChildrenImageSharp = 'childrenImageSharp',
  ChildrenImageSharpFixedBase64 = 'childrenImageSharp___fixed___base64',
  ChildrenImageSharpFixedTracedSvg = 'childrenImageSharp___fixed___tracedSVG',
  ChildrenImageSharpFixedAspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  ChildrenImageSharpFixedWidth = 'childrenImageSharp___fixed___width',
  ChildrenImageSharpFixedHeight = 'childrenImageSharp___fixed___height',
  ChildrenImageSharpFixedSrc = 'childrenImageSharp___fixed___src',
  ChildrenImageSharpFixedSrcSet = 'childrenImageSharp___fixed___srcSet',
  ChildrenImageSharpFixedSrcWebp = 'childrenImageSharp___fixed___srcWebp',
  ChildrenImageSharpFixedSrcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  ChildrenImageSharpFixedOriginalName = 'childrenImageSharp___fixed___originalName',
  ChildrenImageSharpResolutionsBase64 = 'childrenImageSharp___resolutions___base64',
  ChildrenImageSharpResolutionsTracedSvg = 'childrenImageSharp___resolutions___tracedSVG',
  ChildrenImageSharpResolutionsAspectRatio = 'childrenImageSharp___resolutions___aspectRatio',
  ChildrenImageSharpResolutionsWidth = 'childrenImageSharp___resolutions___width',
  ChildrenImageSharpResolutionsHeight = 'childrenImageSharp___resolutions___height',
  ChildrenImageSharpResolutionsSrc = 'childrenImageSharp___resolutions___src',
  ChildrenImageSharpResolutionsSrcSet = 'childrenImageSharp___resolutions___srcSet',
  ChildrenImageSharpResolutionsSrcWebp = 'childrenImageSharp___resolutions___srcWebp',
  ChildrenImageSharpResolutionsSrcSetWebp = 'childrenImageSharp___resolutions___srcSetWebp',
  ChildrenImageSharpResolutionsOriginalName = 'childrenImageSharp___resolutions___originalName',
  ChildrenImageSharpFluidBase64 = 'childrenImageSharp___fluid___base64',
  ChildrenImageSharpFluidTracedSvg = 'childrenImageSharp___fluid___tracedSVG',
  ChildrenImageSharpFluidAspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  ChildrenImageSharpFluidSrc = 'childrenImageSharp___fluid___src',
  ChildrenImageSharpFluidSrcSet = 'childrenImageSharp___fluid___srcSet',
  ChildrenImageSharpFluidSrcWebp = 'childrenImageSharp___fluid___srcWebp',
  ChildrenImageSharpFluidSrcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  ChildrenImageSharpFluidSizes = 'childrenImageSharp___fluid___sizes',
  ChildrenImageSharpFluidOriginalImg = 'childrenImageSharp___fluid___originalImg',
  ChildrenImageSharpFluidOriginalName = 'childrenImageSharp___fluid___originalName',
  ChildrenImageSharpFluidPresentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  ChildrenImageSharpFluidPresentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  ChildrenImageSharpSizesBase64 = 'childrenImageSharp___sizes___base64',
  ChildrenImageSharpSizesTracedSvg = 'childrenImageSharp___sizes___tracedSVG',
  ChildrenImageSharpSizesAspectRatio = 'childrenImageSharp___sizes___aspectRatio',
  ChildrenImageSharpSizesSrc = 'childrenImageSharp___sizes___src',
  ChildrenImageSharpSizesSrcSet = 'childrenImageSharp___sizes___srcSet',
  ChildrenImageSharpSizesSrcWebp = 'childrenImageSharp___sizes___srcWebp',
  ChildrenImageSharpSizesSrcSetWebp = 'childrenImageSharp___sizes___srcSetWebp',
  ChildrenImageSharpSizesSizes = 'childrenImageSharp___sizes___sizes',
  ChildrenImageSharpSizesOriginalImg = 'childrenImageSharp___sizes___originalImg',
  ChildrenImageSharpSizesOriginalName = 'childrenImageSharp___sizes___originalName',
  ChildrenImageSharpSizesPresentationWidth = 'childrenImageSharp___sizes___presentationWidth',
  ChildrenImageSharpSizesPresentationHeight = 'childrenImageSharp___sizes___presentationHeight',
  ChildrenImageSharpGatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  ChildrenImageSharpOriginalWidth = 'childrenImageSharp___original___width',
  ChildrenImageSharpOriginalHeight = 'childrenImageSharp___original___height',
  ChildrenImageSharpOriginalSrc = 'childrenImageSharp___original___src',
  ChildrenImageSharpResizeSrc = 'childrenImageSharp___resize___src',
  ChildrenImageSharpResizeTracedSvg = 'childrenImageSharp___resize___tracedSVG',
  ChildrenImageSharpResizeWidth = 'childrenImageSharp___resize___width',
  ChildrenImageSharpResizeHeight = 'childrenImageSharp___resize___height',
  ChildrenImageSharpResizeAspectRatio = 'childrenImageSharp___resize___aspectRatio',
  ChildrenImageSharpResizeOriginalName = 'childrenImageSharp___resize___originalName',
  ChildrenImageSharpId = 'childrenImageSharp___id',
  ChildrenImageSharpParentId = 'childrenImageSharp___parent___id',
  ChildrenImageSharpParentParentId = 'childrenImageSharp___parent___parent___id',
  ChildrenImageSharpParentParentChildren = 'childrenImageSharp___parent___parent___children',
  ChildrenImageSharpParentChildren = 'childrenImageSharp___parent___children',
  ChildrenImageSharpParentChildrenId = 'childrenImageSharp___parent___children___id',
  ChildrenImageSharpParentChildrenChildren = 'childrenImageSharp___parent___children___children',
  ChildrenImageSharpParentInternalContent = 'childrenImageSharp___parent___internal___content',
  ChildrenImageSharpParentInternalContentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  ChildrenImageSharpParentInternalDescription = 'childrenImageSharp___parent___internal___description',
  ChildrenImageSharpParentInternalFieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  ChildrenImageSharpParentInternalIgnoreType = 'childrenImageSharp___parent___internal___ignoreType',
  ChildrenImageSharpParentInternalMediaType = 'childrenImageSharp___parent___internal___mediaType',
  ChildrenImageSharpParentInternalOwner = 'childrenImageSharp___parent___internal___owner',
  ChildrenImageSharpParentInternalType = 'childrenImageSharp___parent___internal___type',
  ChildrenImageSharpChildren = 'childrenImageSharp___children',
  ChildrenImageSharpChildrenId = 'childrenImageSharp___children___id',
  ChildrenImageSharpChildrenParentId = 'childrenImageSharp___children___parent___id',
  ChildrenImageSharpChildrenParentChildren = 'childrenImageSharp___children___parent___children',
  ChildrenImageSharpChildrenChildren = 'childrenImageSharp___children___children',
  ChildrenImageSharpChildrenChildrenId = 'childrenImageSharp___children___children___id',
  ChildrenImageSharpChildrenChildrenChildren = 'childrenImageSharp___children___children___children',
  ChildrenImageSharpChildrenInternalContent = 'childrenImageSharp___children___internal___content',
  ChildrenImageSharpChildrenInternalContentDigest = 'childrenImageSharp___children___internal___contentDigest',
  ChildrenImageSharpChildrenInternalDescription = 'childrenImageSharp___children___internal___description',
  ChildrenImageSharpChildrenInternalFieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  ChildrenImageSharpChildrenInternalIgnoreType = 'childrenImageSharp___children___internal___ignoreType',
  ChildrenImageSharpChildrenInternalMediaType = 'childrenImageSharp___children___internal___mediaType',
  ChildrenImageSharpChildrenInternalOwner = 'childrenImageSharp___children___internal___owner',
  ChildrenImageSharpChildrenInternalType = 'childrenImageSharp___children___internal___type',
  ChildrenImageSharpInternalContent = 'childrenImageSharp___internal___content',
  ChildrenImageSharpInternalContentDigest = 'childrenImageSharp___internal___contentDigest',
  ChildrenImageSharpInternalDescription = 'childrenImageSharp___internal___description',
  ChildrenImageSharpInternalFieldOwners = 'childrenImageSharp___internal___fieldOwners',
  ChildrenImageSharpInternalIgnoreType = 'childrenImageSharp___internal___ignoreType',
  ChildrenImageSharpInternalMediaType = 'childrenImageSharp___internal___mediaType',
  ChildrenImageSharpInternalOwner = 'childrenImageSharp___internal___owner',
  ChildrenImageSharpInternalType = 'childrenImageSharp___internal___type',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpResolutionsBase64 = 'childImageSharp___resolutions___base64',
  ChildImageSharpResolutionsTracedSvg = 'childImageSharp___resolutions___tracedSVG',
  ChildImageSharpResolutionsAspectRatio = 'childImageSharp___resolutions___aspectRatio',
  ChildImageSharpResolutionsWidth = 'childImageSharp___resolutions___width',
  ChildImageSharpResolutionsHeight = 'childImageSharp___resolutions___height',
  ChildImageSharpResolutionsSrc = 'childImageSharp___resolutions___src',
  ChildImageSharpResolutionsSrcSet = 'childImageSharp___resolutions___srcSet',
  ChildImageSharpResolutionsSrcWebp = 'childImageSharp___resolutions___srcWebp',
  ChildImageSharpResolutionsSrcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  ChildImageSharpResolutionsOriginalName = 'childImageSharp___resolutions___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpSizesBase64 = 'childImageSharp___sizes___base64',
  ChildImageSharpSizesTracedSvg = 'childImageSharp___sizes___tracedSVG',
  ChildImageSharpSizesAspectRatio = 'childImageSharp___sizes___aspectRatio',
  ChildImageSharpSizesSrc = 'childImageSharp___sizes___src',
  ChildImageSharpSizesSrcSet = 'childImageSharp___sizes___srcSet',
  ChildImageSharpSizesSrcWebp = 'childImageSharp___sizes___srcWebp',
  ChildImageSharpSizesSrcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  ChildImageSharpSizesSizes = 'childImageSharp___sizes___sizes',
  ChildImageSharpSizesOriginalImg = 'childImageSharp___sizes___originalImg',
  ChildImageSharpSizesOriginalName = 'childImageSharp___sizes___originalName',
  ChildImageSharpSizesPresentationWidth = 'childImageSharp___sizes___presentationWidth',
  ChildImageSharpSizesPresentationHeight = 'childImageSharp___sizes___presentationHeight',
  ChildImageSharpGatsbyImageData = 'childImageSharp___gatsbyImageData',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  ChildrenMdx = 'childrenMdx',
  ChildrenMdxRawBody = 'childrenMdx___rawBody',
  ChildrenMdxFileAbsolutePath = 'childrenMdx___fileAbsolutePath',
  ChildrenMdxFrontmatterTitle = 'childrenMdx___frontmatter___title',
  ChildrenMdxFrontmatterExcerpt = 'childrenMdx___frontmatter___excerpt',
  ChildrenMdxFrontmatterDate = 'childrenMdx___frontmatter___date',
  ChildrenMdxFrontmatterImageSourceInstanceName = 'childrenMdx___frontmatter___image___sourceInstanceName',
  ChildrenMdxFrontmatterImageAbsolutePath = 'childrenMdx___frontmatter___image___absolutePath',
  ChildrenMdxFrontmatterImageRelativePath = 'childrenMdx___frontmatter___image___relativePath',
  ChildrenMdxFrontmatterImageExtension = 'childrenMdx___frontmatter___image___extension',
  ChildrenMdxFrontmatterImageSize = 'childrenMdx___frontmatter___image___size',
  ChildrenMdxFrontmatterImagePrettySize = 'childrenMdx___frontmatter___image___prettySize',
  ChildrenMdxFrontmatterImageModifiedTime = 'childrenMdx___frontmatter___image___modifiedTime',
  ChildrenMdxFrontmatterImageAccessTime = 'childrenMdx___frontmatter___image___accessTime',
  ChildrenMdxFrontmatterImageChangeTime = 'childrenMdx___frontmatter___image___changeTime',
  ChildrenMdxFrontmatterImageBirthTime = 'childrenMdx___frontmatter___image___birthTime',
  ChildrenMdxFrontmatterImageRoot = 'childrenMdx___frontmatter___image___root',
  ChildrenMdxFrontmatterImageDir = 'childrenMdx___frontmatter___image___dir',
  ChildrenMdxFrontmatterImageBase = 'childrenMdx___frontmatter___image___base',
  ChildrenMdxFrontmatterImageExt = 'childrenMdx___frontmatter___image___ext',
  ChildrenMdxFrontmatterImageName = 'childrenMdx___frontmatter___image___name',
  ChildrenMdxFrontmatterImageRelativeDirectory = 'childrenMdx___frontmatter___image___relativeDirectory',
  ChildrenMdxFrontmatterImageDev = 'childrenMdx___frontmatter___image___dev',
  ChildrenMdxFrontmatterImageMode = 'childrenMdx___frontmatter___image___mode',
  ChildrenMdxFrontmatterImageNlink = 'childrenMdx___frontmatter___image___nlink',
  ChildrenMdxFrontmatterImageUid = 'childrenMdx___frontmatter___image___uid',
  ChildrenMdxFrontmatterImageGid = 'childrenMdx___frontmatter___image___gid',
  ChildrenMdxFrontmatterImageRdev = 'childrenMdx___frontmatter___image___rdev',
  ChildrenMdxFrontmatterImageIno = 'childrenMdx___frontmatter___image___ino',
  ChildrenMdxFrontmatterImageAtimeMs = 'childrenMdx___frontmatter___image___atimeMs',
  ChildrenMdxFrontmatterImageMtimeMs = 'childrenMdx___frontmatter___image___mtimeMs',
  ChildrenMdxFrontmatterImageCtimeMs = 'childrenMdx___frontmatter___image___ctimeMs',
  ChildrenMdxFrontmatterImageAtime = 'childrenMdx___frontmatter___image___atime',
  ChildrenMdxFrontmatterImageMtime = 'childrenMdx___frontmatter___image___mtime',
  ChildrenMdxFrontmatterImageCtime = 'childrenMdx___frontmatter___image___ctime',
  ChildrenMdxFrontmatterImageBirthtime = 'childrenMdx___frontmatter___image___birthtime',
  ChildrenMdxFrontmatterImageBirthtimeMs = 'childrenMdx___frontmatter___image___birthtimeMs',
  ChildrenMdxFrontmatterImageBlksize = 'childrenMdx___frontmatter___image___blksize',
  ChildrenMdxFrontmatterImageBlocks = 'childrenMdx___frontmatter___image___blocks',
  ChildrenMdxFrontmatterImagePublicUrl = 'childrenMdx___frontmatter___image___publicURL',
  ChildrenMdxFrontmatterImageChildrenImageSharp = 'childrenMdx___frontmatter___image___childrenImageSharp',
  ChildrenMdxFrontmatterImageChildrenMdx = 'childrenMdx___frontmatter___image___childrenMdx',
  ChildrenMdxFrontmatterImageId = 'childrenMdx___frontmatter___image___id',
  ChildrenMdxFrontmatterImageChildren = 'childrenMdx___frontmatter___image___children',
  ChildrenMdxFrontmatterImageAlt = 'childrenMdx___frontmatter___imageAlt',
  ChildrenMdxFrontmatterTags = 'childrenMdx___frontmatter___tags',
  ChildrenMdxFrontmatterRedirectFrom = 'childrenMdx___frontmatter___redirectFrom',
  ChildrenMdxSlug = 'childrenMdx___slug',
  ChildrenMdxBody = 'childrenMdx___body',
  ChildrenMdxExcerpt = 'childrenMdx___excerpt',
  ChildrenMdxHeadings = 'childrenMdx___headings',
  ChildrenMdxHeadingsValue = 'childrenMdx___headings___value',
  ChildrenMdxHeadingsDepth = 'childrenMdx___headings___depth',
  ChildrenMdxHtml = 'childrenMdx___html',
  ChildrenMdxMdxAst = 'childrenMdx___mdxAST',
  ChildrenMdxTableOfContents = 'childrenMdx___tableOfContents',
  ChildrenMdxTimeToRead = 'childrenMdx___timeToRead',
  ChildrenMdxWordCountParagraphs = 'childrenMdx___wordCount___paragraphs',
  ChildrenMdxWordCountSentences = 'childrenMdx___wordCount___sentences',
  ChildrenMdxWordCountWords = 'childrenMdx___wordCount___words',
  ChildrenMdxChildrenMdxBlogPost = 'childrenMdx___childrenMdxBlogPost',
  ChildrenMdxChildrenMdxBlogPostId = 'childrenMdx___childrenMdxBlogPost___id',
  ChildrenMdxChildrenMdxBlogPostTitle = 'childrenMdx___childrenMdxBlogPost___title',
  ChildrenMdxChildrenMdxBlogPostSlug = 'childrenMdx___childrenMdxBlogPost___slug',
  ChildrenMdxChildrenMdxBlogPostTags = 'childrenMdx___childrenMdxBlogPost___tags',
  ChildrenMdxChildrenMdxBlogPostDate = 'childrenMdx___childrenMdxBlogPost___date',
  ChildrenMdxChildrenMdxBlogPostRedirectFrom = 'childrenMdx___childrenMdxBlogPost___redirectFrom',
  ChildrenMdxChildrenMdxBlogPostExcerpt = 'childrenMdx___childrenMdxBlogPost___excerpt',
  ChildrenMdxChildrenMdxBlogPostImageSourceInstanceName = 'childrenMdx___childrenMdxBlogPost___image___sourceInstanceName',
  ChildrenMdxChildrenMdxBlogPostImageAbsolutePath = 'childrenMdx___childrenMdxBlogPost___image___absolutePath',
  ChildrenMdxChildrenMdxBlogPostImageRelativePath = 'childrenMdx___childrenMdxBlogPost___image___relativePath',
  ChildrenMdxChildrenMdxBlogPostImageExtension = 'childrenMdx___childrenMdxBlogPost___image___extension',
  ChildrenMdxChildrenMdxBlogPostImageSize = 'childrenMdx___childrenMdxBlogPost___image___size',
  ChildrenMdxChildrenMdxBlogPostImagePrettySize = 'childrenMdx___childrenMdxBlogPost___image___prettySize',
  ChildrenMdxChildrenMdxBlogPostImageModifiedTime = 'childrenMdx___childrenMdxBlogPost___image___modifiedTime',
  ChildrenMdxChildrenMdxBlogPostImageAccessTime = 'childrenMdx___childrenMdxBlogPost___image___accessTime',
  ChildrenMdxChildrenMdxBlogPostImageChangeTime = 'childrenMdx___childrenMdxBlogPost___image___changeTime',
  ChildrenMdxChildrenMdxBlogPostImageBirthTime = 'childrenMdx___childrenMdxBlogPost___image___birthTime',
  ChildrenMdxChildrenMdxBlogPostImageRoot = 'childrenMdx___childrenMdxBlogPost___image___root',
  ChildrenMdxChildrenMdxBlogPostImageDir = 'childrenMdx___childrenMdxBlogPost___image___dir',
  ChildrenMdxChildrenMdxBlogPostImageBase = 'childrenMdx___childrenMdxBlogPost___image___base',
  ChildrenMdxChildrenMdxBlogPostImageExt = 'childrenMdx___childrenMdxBlogPost___image___ext',
  ChildrenMdxChildrenMdxBlogPostImageName = 'childrenMdx___childrenMdxBlogPost___image___name',
  ChildrenMdxChildrenMdxBlogPostImageRelativeDirectory = 'childrenMdx___childrenMdxBlogPost___image___relativeDirectory',
  ChildrenMdxChildrenMdxBlogPostImageDev = 'childrenMdx___childrenMdxBlogPost___image___dev',
  ChildrenMdxChildrenMdxBlogPostImageMode = 'childrenMdx___childrenMdxBlogPost___image___mode',
  ChildrenMdxChildrenMdxBlogPostImageNlink = 'childrenMdx___childrenMdxBlogPost___image___nlink',
  ChildrenMdxChildrenMdxBlogPostImageUid = 'childrenMdx___childrenMdxBlogPost___image___uid',
  ChildrenMdxChildrenMdxBlogPostImageGid = 'childrenMdx___childrenMdxBlogPost___image___gid',
  ChildrenMdxChildrenMdxBlogPostImageRdev = 'childrenMdx___childrenMdxBlogPost___image___rdev',
  ChildrenMdxChildrenMdxBlogPostImageIno = 'childrenMdx___childrenMdxBlogPost___image___ino',
  ChildrenMdxChildrenMdxBlogPostImageAtimeMs = 'childrenMdx___childrenMdxBlogPost___image___atimeMs',
  ChildrenMdxChildrenMdxBlogPostImageMtimeMs = 'childrenMdx___childrenMdxBlogPost___image___mtimeMs',
  ChildrenMdxChildrenMdxBlogPostImageCtimeMs = 'childrenMdx___childrenMdxBlogPost___image___ctimeMs',
  ChildrenMdxChildrenMdxBlogPostImageAtime = 'childrenMdx___childrenMdxBlogPost___image___atime',
  ChildrenMdxChildrenMdxBlogPostImageMtime = 'childrenMdx___childrenMdxBlogPost___image___mtime',
  ChildrenMdxChildrenMdxBlogPostImageCtime = 'childrenMdx___childrenMdxBlogPost___image___ctime',
  ChildrenMdxChildrenMdxBlogPostImageBirthtime = 'childrenMdx___childrenMdxBlogPost___image___birthtime',
  ChildrenMdxChildrenMdxBlogPostImageBirthtimeMs = 'childrenMdx___childrenMdxBlogPost___image___birthtimeMs',
  ChildrenMdxChildrenMdxBlogPostImageBlksize = 'childrenMdx___childrenMdxBlogPost___image___blksize',
  ChildrenMdxChildrenMdxBlogPostImageBlocks = 'childrenMdx___childrenMdxBlogPost___image___blocks',
  ChildrenMdxChildrenMdxBlogPostImagePublicUrl = 'childrenMdx___childrenMdxBlogPost___image___publicURL',
  ChildrenMdxChildrenMdxBlogPostImageChildrenImageSharp = 'childrenMdx___childrenMdxBlogPost___image___childrenImageSharp',
  ChildrenMdxChildrenMdxBlogPostImageChildrenMdx = 'childrenMdx___childrenMdxBlogPost___image___childrenMdx',
  ChildrenMdxChildrenMdxBlogPostImageId = 'childrenMdx___childrenMdxBlogPost___image___id',
  ChildrenMdxChildrenMdxBlogPostImageChildren = 'childrenMdx___childrenMdxBlogPost___image___children',
  ChildrenMdxChildrenMdxBlogPostImageAlt = 'childrenMdx___childrenMdxBlogPost___imageAlt',
  ChildrenMdxChildrenMdxBlogPostBody = 'childrenMdx___childrenMdxBlogPost___body',
  ChildrenMdxChildrenMdxBlogPostParentId = 'childrenMdx___childrenMdxBlogPost___parent___id',
  ChildrenMdxChildrenMdxBlogPostParentChildren = 'childrenMdx___childrenMdxBlogPost___parent___children',
  ChildrenMdxChildrenMdxBlogPostChildren = 'childrenMdx___childrenMdxBlogPost___children',
  ChildrenMdxChildrenMdxBlogPostChildrenId = 'childrenMdx___childrenMdxBlogPost___children___id',
  ChildrenMdxChildrenMdxBlogPostChildrenChildren = 'childrenMdx___childrenMdxBlogPost___children___children',
  ChildrenMdxChildrenMdxBlogPostInternalContent = 'childrenMdx___childrenMdxBlogPost___internal___content',
  ChildrenMdxChildrenMdxBlogPostInternalContentDigest = 'childrenMdx___childrenMdxBlogPost___internal___contentDigest',
  ChildrenMdxChildrenMdxBlogPostInternalDescription = 'childrenMdx___childrenMdxBlogPost___internal___description',
  ChildrenMdxChildrenMdxBlogPostInternalFieldOwners = 'childrenMdx___childrenMdxBlogPost___internal___fieldOwners',
  ChildrenMdxChildrenMdxBlogPostInternalIgnoreType = 'childrenMdx___childrenMdxBlogPost___internal___ignoreType',
  ChildrenMdxChildrenMdxBlogPostInternalMediaType = 'childrenMdx___childrenMdxBlogPost___internal___mediaType',
  ChildrenMdxChildrenMdxBlogPostInternalOwner = 'childrenMdx___childrenMdxBlogPost___internal___owner',
  ChildrenMdxChildrenMdxBlogPostInternalType = 'childrenMdx___childrenMdxBlogPost___internal___type',
  ChildrenMdxChildMdxBlogPostId = 'childrenMdx___childMdxBlogPost___id',
  ChildrenMdxChildMdxBlogPostTitle = 'childrenMdx___childMdxBlogPost___title',
  ChildrenMdxChildMdxBlogPostSlug = 'childrenMdx___childMdxBlogPost___slug',
  ChildrenMdxChildMdxBlogPostTags = 'childrenMdx___childMdxBlogPost___tags',
  ChildrenMdxChildMdxBlogPostDate = 'childrenMdx___childMdxBlogPost___date',
  ChildrenMdxChildMdxBlogPostRedirectFrom = 'childrenMdx___childMdxBlogPost___redirectFrom',
  ChildrenMdxChildMdxBlogPostExcerpt = 'childrenMdx___childMdxBlogPost___excerpt',
  ChildrenMdxChildMdxBlogPostImageSourceInstanceName = 'childrenMdx___childMdxBlogPost___image___sourceInstanceName',
  ChildrenMdxChildMdxBlogPostImageAbsolutePath = 'childrenMdx___childMdxBlogPost___image___absolutePath',
  ChildrenMdxChildMdxBlogPostImageRelativePath = 'childrenMdx___childMdxBlogPost___image___relativePath',
  ChildrenMdxChildMdxBlogPostImageExtension = 'childrenMdx___childMdxBlogPost___image___extension',
  ChildrenMdxChildMdxBlogPostImageSize = 'childrenMdx___childMdxBlogPost___image___size',
  ChildrenMdxChildMdxBlogPostImagePrettySize = 'childrenMdx___childMdxBlogPost___image___prettySize',
  ChildrenMdxChildMdxBlogPostImageModifiedTime = 'childrenMdx___childMdxBlogPost___image___modifiedTime',
  ChildrenMdxChildMdxBlogPostImageAccessTime = 'childrenMdx___childMdxBlogPost___image___accessTime',
  ChildrenMdxChildMdxBlogPostImageChangeTime = 'childrenMdx___childMdxBlogPost___image___changeTime',
  ChildrenMdxChildMdxBlogPostImageBirthTime = 'childrenMdx___childMdxBlogPost___image___birthTime',
  ChildrenMdxChildMdxBlogPostImageRoot = 'childrenMdx___childMdxBlogPost___image___root',
  ChildrenMdxChildMdxBlogPostImageDir = 'childrenMdx___childMdxBlogPost___image___dir',
  ChildrenMdxChildMdxBlogPostImageBase = 'childrenMdx___childMdxBlogPost___image___base',
  ChildrenMdxChildMdxBlogPostImageExt = 'childrenMdx___childMdxBlogPost___image___ext',
  ChildrenMdxChildMdxBlogPostImageName = 'childrenMdx___childMdxBlogPost___image___name',
  ChildrenMdxChildMdxBlogPostImageRelativeDirectory = 'childrenMdx___childMdxBlogPost___image___relativeDirectory',
  ChildrenMdxChildMdxBlogPostImageDev = 'childrenMdx___childMdxBlogPost___image___dev',
  ChildrenMdxChildMdxBlogPostImageMode = 'childrenMdx___childMdxBlogPost___image___mode',
  ChildrenMdxChildMdxBlogPostImageNlink = 'childrenMdx___childMdxBlogPost___image___nlink',
  ChildrenMdxChildMdxBlogPostImageUid = 'childrenMdx___childMdxBlogPost___image___uid',
  ChildrenMdxChildMdxBlogPostImageGid = 'childrenMdx___childMdxBlogPost___image___gid',
  ChildrenMdxChildMdxBlogPostImageRdev = 'childrenMdx___childMdxBlogPost___image___rdev',
  ChildrenMdxChildMdxBlogPostImageIno = 'childrenMdx___childMdxBlogPost___image___ino',
  ChildrenMdxChildMdxBlogPostImageAtimeMs = 'childrenMdx___childMdxBlogPost___image___atimeMs',
  ChildrenMdxChildMdxBlogPostImageMtimeMs = 'childrenMdx___childMdxBlogPost___image___mtimeMs',
  ChildrenMdxChildMdxBlogPostImageCtimeMs = 'childrenMdx___childMdxBlogPost___image___ctimeMs',
  ChildrenMdxChildMdxBlogPostImageAtime = 'childrenMdx___childMdxBlogPost___image___atime',
  ChildrenMdxChildMdxBlogPostImageMtime = 'childrenMdx___childMdxBlogPost___image___mtime',
  ChildrenMdxChildMdxBlogPostImageCtime = 'childrenMdx___childMdxBlogPost___image___ctime',
  ChildrenMdxChildMdxBlogPostImageBirthtime = 'childrenMdx___childMdxBlogPost___image___birthtime',
  ChildrenMdxChildMdxBlogPostImageBirthtimeMs = 'childrenMdx___childMdxBlogPost___image___birthtimeMs',
  ChildrenMdxChildMdxBlogPostImageBlksize = 'childrenMdx___childMdxBlogPost___image___blksize',
  ChildrenMdxChildMdxBlogPostImageBlocks = 'childrenMdx___childMdxBlogPost___image___blocks',
  ChildrenMdxChildMdxBlogPostImagePublicUrl = 'childrenMdx___childMdxBlogPost___image___publicURL',
  ChildrenMdxChildMdxBlogPostImageChildrenImageSharp = 'childrenMdx___childMdxBlogPost___image___childrenImageSharp',
  ChildrenMdxChildMdxBlogPostImageChildrenMdx = 'childrenMdx___childMdxBlogPost___image___childrenMdx',
  ChildrenMdxChildMdxBlogPostImageId = 'childrenMdx___childMdxBlogPost___image___id',
  ChildrenMdxChildMdxBlogPostImageChildren = 'childrenMdx___childMdxBlogPost___image___children',
  ChildrenMdxChildMdxBlogPostImageAlt = 'childrenMdx___childMdxBlogPost___imageAlt',
  ChildrenMdxChildMdxBlogPostBody = 'childrenMdx___childMdxBlogPost___body',
  ChildrenMdxChildMdxBlogPostParentId = 'childrenMdx___childMdxBlogPost___parent___id',
  ChildrenMdxChildMdxBlogPostParentChildren = 'childrenMdx___childMdxBlogPost___parent___children',
  ChildrenMdxChildMdxBlogPostChildren = 'childrenMdx___childMdxBlogPost___children',
  ChildrenMdxChildMdxBlogPostChildrenId = 'childrenMdx___childMdxBlogPost___children___id',
  ChildrenMdxChildMdxBlogPostChildrenChildren = 'childrenMdx___childMdxBlogPost___children___children',
  ChildrenMdxChildMdxBlogPostInternalContent = 'childrenMdx___childMdxBlogPost___internal___content',
  ChildrenMdxChildMdxBlogPostInternalContentDigest = 'childrenMdx___childMdxBlogPost___internal___contentDigest',
  ChildrenMdxChildMdxBlogPostInternalDescription = 'childrenMdx___childMdxBlogPost___internal___description',
  ChildrenMdxChildMdxBlogPostInternalFieldOwners = 'childrenMdx___childMdxBlogPost___internal___fieldOwners',
  ChildrenMdxChildMdxBlogPostInternalIgnoreType = 'childrenMdx___childMdxBlogPost___internal___ignoreType',
  ChildrenMdxChildMdxBlogPostInternalMediaType = 'childrenMdx___childMdxBlogPost___internal___mediaType',
  ChildrenMdxChildMdxBlogPostInternalOwner = 'childrenMdx___childMdxBlogPost___internal___owner',
  ChildrenMdxChildMdxBlogPostInternalType = 'childrenMdx___childMdxBlogPost___internal___type',
  ChildrenMdxId = 'childrenMdx___id',
  ChildrenMdxParentId = 'childrenMdx___parent___id',
  ChildrenMdxParentParentId = 'childrenMdx___parent___parent___id',
  ChildrenMdxParentParentChildren = 'childrenMdx___parent___parent___children',
  ChildrenMdxParentChildren = 'childrenMdx___parent___children',
  ChildrenMdxParentChildrenId = 'childrenMdx___parent___children___id',
  ChildrenMdxParentChildrenChildren = 'childrenMdx___parent___children___children',
  ChildrenMdxParentInternalContent = 'childrenMdx___parent___internal___content',
  ChildrenMdxParentInternalContentDigest = 'childrenMdx___parent___internal___contentDigest',
  ChildrenMdxParentInternalDescription = 'childrenMdx___parent___internal___description',
  ChildrenMdxParentInternalFieldOwners = 'childrenMdx___parent___internal___fieldOwners',
  ChildrenMdxParentInternalIgnoreType = 'childrenMdx___parent___internal___ignoreType',
  ChildrenMdxParentInternalMediaType = 'childrenMdx___parent___internal___mediaType',
  ChildrenMdxParentInternalOwner = 'childrenMdx___parent___internal___owner',
  ChildrenMdxParentInternalType = 'childrenMdx___parent___internal___type',
  ChildrenMdxChildren = 'childrenMdx___children',
  ChildrenMdxChildrenId = 'childrenMdx___children___id',
  ChildrenMdxChildrenParentId = 'childrenMdx___children___parent___id',
  ChildrenMdxChildrenParentChildren = 'childrenMdx___children___parent___children',
  ChildrenMdxChildrenChildren = 'childrenMdx___children___children',
  ChildrenMdxChildrenChildrenId = 'childrenMdx___children___children___id',
  ChildrenMdxChildrenChildrenChildren = 'childrenMdx___children___children___children',
  ChildrenMdxChildrenInternalContent = 'childrenMdx___children___internal___content',
  ChildrenMdxChildrenInternalContentDigest = 'childrenMdx___children___internal___contentDigest',
  ChildrenMdxChildrenInternalDescription = 'childrenMdx___children___internal___description',
  ChildrenMdxChildrenInternalFieldOwners = 'childrenMdx___children___internal___fieldOwners',
  ChildrenMdxChildrenInternalIgnoreType = 'childrenMdx___children___internal___ignoreType',
  ChildrenMdxChildrenInternalMediaType = 'childrenMdx___children___internal___mediaType',
  ChildrenMdxChildrenInternalOwner = 'childrenMdx___children___internal___owner',
  ChildrenMdxChildrenInternalType = 'childrenMdx___children___internal___type',
  ChildrenMdxInternalContent = 'childrenMdx___internal___content',
  ChildrenMdxInternalContentDigest = 'childrenMdx___internal___contentDigest',
  ChildrenMdxInternalDescription = 'childrenMdx___internal___description',
  ChildrenMdxInternalFieldOwners = 'childrenMdx___internal___fieldOwners',
  ChildrenMdxInternalIgnoreType = 'childrenMdx___internal___ignoreType',
  ChildrenMdxInternalMediaType = 'childrenMdx___internal___mediaType',
  ChildrenMdxInternalOwner = 'childrenMdx___internal___owner',
  ChildrenMdxInternalType = 'childrenMdx___internal___type',
  ChildMdxRawBody = 'childMdx___rawBody',
  ChildMdxFileAbsolutePath = 'childMdx___fileAbsolutePath',
  ChildMdxFrontmatterTitle = 'childMdx___frontmatter___title',
  ChildMdxFrontmatterExcerpt = 'childMdx___frontmatter___excerpt',
  ChildMdxFrontmatterDate = 'childMdx___frontmatter___date',
  ChildMdxFrontmatterImageSourceInstanceName = 'childMdx___frontmatter___image___sourceInstanceName',
  ChildMdxFrontmatterImageAbsolutePath = 'childMdx___frontmatter___image___absolutePath',
  ChildMdxFrontmatterImageRelativePath = 'childMdx___frontmatter___image___relativePath',
  ChildMdxFrontmatterImageExtension = 'childMdx___frontmatter___image___extension',
  ChildMdxFrontmatterImageSize = 'childMdx___frontmatter___image___size',
  ChildMdxFrontmatterImagePrettySize = 'childMdx___frontmatter___image___prettySize',
  ChildMdxFrontmatterImageModifiedTime = 'childMdx___frontmatter___image___modifiedTime',
  ChildMdxFrontmatterImageAccessTime = 'childMdx___frontmatter___image___accessTime',
  ChildMdxFrontmatterImageChangeTime = 'childMdx___frontmatter___image___changeTime',
  ChildMdxFrontmatterImageBirthTime = 'childMdx___frontmatter___image___birthTime',
  ChildMdxFrontmatterImageRoot = 'childMdx___frontmatter___image___root',
  ChildMdxFrontmatterImageDir = 'childMdx___frontmatter___image___dir',
  ChildMdxFrontmatterImageBase = 'childMdx___frontmatter___image___base',
  ChildMdxFrontmatterImageExt = 'childMdx___frontmatter___image___ext',
  ChildMdxFrontmatterImageName = 'childMdx___frontmatter___image___name',
  ChildMdxFrontmatterImageRelativeDirectory = 'childMdx___frontmatter___image___relativeDirectory',
  ChildMdxFrontmatterImageDev = 'childMdx___frontmatter___image___dev',
  ChildMdxFrontmatterImageMode = 'childMdx___frontmatter___image___mode',
  ChildMdxFrontmatterImageNlink = 'childMdx___frontmatter___image___nlink',
  ChildMdxFrontmatterImageUid = 'childMdx___frontmatter___image___uid',
  ChildMdxFrontmatterImageGid = 'childMdx___frontmatter___image___gid',
  ChildMdxFrontmatterImageRdev = 'childMdx___frontmatter___image___rdev',
  ChildMdxFrontmatterImageIno = 'childMdx___frontmatter___image___ino',
  ChildMdxFrontmatterImageAtimeMs = 'childMdx___frontmatter___image___atimeMs',
  ChildMdxFrontmatterImageMtimeMs = 'childMdx___frontmatter___image___mtimeMs',
  ChildMdxFrontmatterImageCtimeMs = 'childMdx___frontmatter___image___ctimeMs',
  ChildMdxFrontmatterImageAtime = 'childMdx___frontmatter___image___atime',
  ChildMdxFrontmatterImageMtime = 'childMdx___frontmatter___image___mtime',
  ChildMdxFrontmatterImageCtime = 'childMdx___frontmatter___image___ctime',
  ChildMdxFrontmatterImageBirthtime = 'childMdx___frontmatter___image___birthtime',
  ChildMdxFrontmatterImageBirthtimeMs = 'childMdx___frontmatter___image___birthtimeMs',
  ChildMdxFrontmatterImageBlksize = 'childMdx___frontmatter___image___blksize',
  ChildMdxFrontmatterImageBlocks = 'childMdx___frontmatter___image___blocks',
  ChildMdxFrontmatterImagePublicUrl = 'childMdx___frontmatter___image___publicURL',
  ChildMdxFrontmatterImageChildrenImageSharp = 'childMdx___frontmatter___image___childrenImageSharp',
  ChildMdxFrontmatterImageChildrenMdx = 'childMdx___frontmatter___image___childrenMdx',
  ChildMdxFrontmatterImageId = 'childMdx___frontmatter___image___id',
  ChildMdxFrontmatterImageChildren = 'childMdx___frontmatter___image___children',
  ChildMdxFrontmatterImageAlt = 'childMdx___frontmatter___imageAlt',
  ChildMdxFrontmatterTags = 'childMdx___frontmatter___tags',
  ChildMdxFrontmatterRedirectFrom = 'childMdx___frontmatter___redirectFrom',
  ChildMdxSlug = 'childMdx___slug',
  ChildMdxBody = 'childMdx___body',
  ChildMdxExcerpt = 'childMdx___excerpt',
  ChildMdxHeadings = 'childMdx___headings',
  ChildMdxHeadingsValue = 'childMdx___headings___value',
  ChildMdxHeadingsDepth = 'childMdx___headings___depth',
  ChildMdxHtml = 'childMdx___html',
  ChildMdxMdxAst = 'childMdx___mdxAST',
  ChildMdxTableOfContents = 'childMdx___tableOfContents',
  ChildMdxTimeToRead = 'childMdx___timeToRead',
  ChildMdxWordCountParagraphs = 'childMdx___wordCount___paragraphs',
  ChildMdxWordCountSentences = 'childMdx___wordCount___sentences',
  ChildMdxWordCountWords = 'childMdx___wordCount___words',
  ChildMdxChildrenMdxBlogPost = 'childMdx___childrenMdxBlogPost',
  ChildMdxChildrenMdxBlogPostId = 'childMdx___childrenMdxBlogPost___id',
  ChildMdxChildrenMdxBlogPostTitle = 'childMdx___childrenMdxBlogPost___title',
  ChildMdxChildrenMdxBlogPostSlug = 'childMdx___childrenMdxBlogPost___slug',
  ChildMdxChildrenMdxBlogPostTags = 'childMdx___childrenMdxBlogPost___tags',
  ChildMdxChildrenMdxBlogPostDate = 'childMdx___childrenMdxBlogPost___date',
  ChildMdxChildrenMdxBlogPostRedirectFrom = 'childMdx___childrenMdxBlogPost___redirectFrom',
  ChildMdxChildrenMdxBlogPostExcerpt = 'childMdx___childrenMdxBlogPost___excerpt',
  ChildMdxChildrenMdxBlogPostImageSourceInstanceName = 'childMdx___childrenMdxBlogPost___image___sourceInstanceName',
  ChildMdxChildrenMdxBlogPostImageAbsolutePath = 'childMdx___childrenMdxBlogPost___image___absolutePath',
  ChildMdxChildrenMdxBlogPostImageRelativePath = 'childMdx___childrenMdxBlogPost___image___relativePath',
  ChildMdxChildrenMdxBlogPostImageExtension = 'childMdx___childrenMdxBlogPost___image___extension',
  ChildMdxChildrenMdxBlogPostImageSize = 'childMdx___childrenMdxBlogPost___image___size',
  ChildMdxChildrenMdxBlogPostImagePrettySize = 'childMdx___childrenMdxBlogPost___image___prettySize',
  ChildMdxChildrenMdxBlogPostImageModifiedTime = 'childMdx___childrenMdxBlogPost___image___modifiedTime',
  ChildMdxChildrenMdxBlogPostImageAccessTime = 'childMdx___childrenMdxBlogPost___image___accessTime',
  ChildMdxChildrenMdxBlogPostImageChangeTime = 'childMdx___childrenMdxBlogPost___image___changeTime',
  ChildMdxChildrenMdxBlogPostImageBirthTime = 'childMdx___childrenMdxBlogPost___image___birthTime',
  ChildMdxChildrenMdxBlogPostImageRoot = 'childMdx___childrenMdxBlogPost___image___root',
  ChildMdxChildrenMdxBlogPostImageDir = 'childMdx___childrenMdxBlogPost___image___dir',
  ChildMdxChildrenMdxBlogPostImageBase = 'childMdx___childrenMdxBlogPost___image___base',
  ChildMdxChildrenMdxBlogPostImageExt = 'childMdx___childrenMdxBlogPost___image___ext',
  ChildMdxChildrenMdxBlogPostImageName = 'childMdx___childrenMdxBlogPost___image___name',
  ChildMdxChildrenMdxBlogPostImageRelativeDirectory = 'childMdx___childrenMdxBlogPost___image___relativeDirectory',
  ChildMdxChildrenMdxBlogPostImageDev = 'childMdx___childrenMdxBlogPost___image___dev',
  ChildMdxChildrenMdxBlogPostImageMode = 'childMdx___childrenMdxBlogPost___image___mode',
  ChildMdxChildrenMdxBlogPostImageNlink = 'childMdx___childrenMdxBlogPost___image___nlink',
  ChildMdxChildrenMdxBlogPostImageUid = 'childMdx___childrenMdxBlogPost___image___uid',
  ChildMdxChildrenMdxBlogPostImageGid = 'childMdx___childrenMdxBlogPost___image___gid',
  ChildMdxChildrenMdxBlogPostImageRdev = 'childMdx___childrenMdxBlogPost___image___rdev',
  ChildMdxChildrenMdxBlogPostImageIno = 'childMdx___childrenMdxBlogPost___image___ino',
  ChildMdxChildrenMdxBlogPostImageAtimeMs = 'childMdx___childrenMdxBlogPost___image___atimeMs',
  ChildMdxChildrenMdxBlogPostImageMtimeMs = 'childMdx___childrenMdxBlogPost___image___mtimeMs',
  ChildMdxChildrenMdxBlogPostImageCtimeMs = 'childMdx___childrenMdxBlogPost___image___ctimeMs',
  ChildMdxChildrenMdxBlogPostImageAtime = 'childMdx___childrenMdxBlogPost___image___atime',
  ChildMdxChildrenMdxBlogPostImageMtime = 'childMdx___childrenMdxBlogPost___image___mtime',
  ChildMdxChildrenMdxBlogPostImageCtime = 'childMdx___childrenMdxBlogPost___image___ctime',
  ChildMdxChildrenMdxBlogPostImageBirthtime = 'childMdx___childrenMdxBlogPost___image___birthtime',
  ChildMdxChildrenMdxBlogPostImageBirthtimeMs = 'childMdx___childrenMdxBlogPost___image___birthtimeMs',
  ChildMdxChildrenMdxBlogPostImageBlksize = 'childMdx___childrenMdxBlogPost___image___blksize',
  ChildMdxChildrenMdxBlogPostImageBlocks = 'childMdx___childrenMdxBlogPost___image___blocks',
  ChildMdxChildrenMdxBlogPostImagePublicUrl = 'childMdx___childrenMdxBlogPost___image___publicURL',
  ChildMdxChildrenMdxBlogPostImageChildrenImageSharp = 'childMdx___childrenMdxBlogPost___image___childrenImageSharp',
  ChildMdxChildrenMdxBlogPostImageChildrenMdx = 'childMdx___childrenMdxBlogPost___image___childrenMdx',
  ChildMdxChildrenMdxBlogPostImageId = 'childMdx___childrenMdxBlogPost___image___id',
  ChildMdxChildrenMdxBlogPostImageChildren = 'childMdx___childrenMdxBlogPost___image___children',
  ChildMdxChildrenMdxBlogPostImageAlt = 'childMdx___childrenMdxBlogPost___imageAlt',
  ChildMdxChildrenMdxBlogPostBody = 'childMdx___childrenMdxBlogPost___body',
  ChildMdxChildrenMdxBlogPostParentId = 'childMdx___childrenMdxBlogPost___parent___id',
  ChildMdxChildrenMdxBlogPostParentChildren = 'childMdx___childrenMdxBlogPost___parent___children',
  ChildMdxChildrenMdxBlogPostChildren = 'childMdx___childrenMdxBlogPost___children',
  ChildMdxChildrenMdxBlogPostChildrenId = 'childMdx___childrenMdxBlogPost___children___id',
  ChildMdxChildrenMdxBlogPostChildrenChildren = 'childMdx___childrenMdxBlogPost___children___children',
  ChildMdxChildrenMdxBlogPostInternalContent = 'childMdx___childrenMdxBlogPost___internal___content',
  ChildMdxChildrenMdxBlogPostInternalContentDigest = 'childMdx___childrenMdxBlogPost___internal___contentDigest',
  ChildMdxChildrenMdxBlogPostInternalDescription = 'childMdx___childrenMdxBlogPost___internal___description',
  ChildMdxChildrenMdxBlogPostInternalFieldOwners = 'childMdx___childrenMdxBlogPost___internal___fieldOwners',
  ChildMdxChildrenMdxBlogPostInternalIgnoreType = 'childMdx___childrenMdxBlogPost___internal___ignoreType',
  ChildMdxChildrenMdxBlogPostInternalMediaType = 'childMdx___childrenMdxBlogPost___internal___mediaType',
  ChildMdxChildrenMdxBlogPostInternalOwner = 'childMdx___childrenMdxBlogPost___internal___owner',
  ChildMdxChildrenMdxBlogPostInternalType = 'childMdx___childrenMdxBlogPost___internal___type',
  ChildMdxChildMdxBlogPostId = 'childMdx___childMdxBlogPost___id',
  ChildMdxChildMdxBlogPostTitle = 'childMdx___childMdxBlogPost___title',
  ChildMdxChildMdxBlogPostSlug = 'childMdx___childMdxBlogPost___slug',
  ChildMdxChildMdxBlogPostTags = 'childMdx___childMdxBlogPost___tags',
  ChildMdxChildMdxBlogPostDate = 'childMdx___childMdxBlogPost___date',
  ChildMdxChildMdxBlogPostRedirectFrom = 'childMdx___childMdxBlogPost___redirectFrom',
  ChildMdxChildMdxBlogPostExcerpt = 'childMdx___childMdxBlogPost___excerpt',
  ChildMdxChildMdxBlogPostImageSourceInstanceName = 'childMdx___childMdxBlogPost___image___sourceInstanceName',
  ChildMdxChildMdxBlogPostImageAbsolutePath = 'childMdx___childMdxBlogPost___image___absolutePath',
  ChildMdxChildMdxBlogPostImageRelativePath = 'childMdx___childMdxBlogPost___image___relativePath',
  ChildMdxChildMdxBlogPostImageExtension = 'childMdx___childMdxBlogPost___image___extension',
  ChildMdxChildMdxBlogPostImageSize = 'childMdx___childMdxBlogPost___image___size',
  ChildMdxChildMdxBlogPostImagePrettySize = 'childMdx___childMdxBlogPost___image___prettySize',
  ChildMdxChildMdxBlogPostImageModifiedTime = 'childMdx___childMdxBlogPost___image___modifiedTime',
  ChildMdxChildMdxBlogPostImageAccessTime = 'childMdx___childMdxBlogPost___image___accessTime',
  ChildMdxChildMdxBlogPostImageChangeTime = 'childMdx___childMdxBlogPost___image___changeTime',
  ChildMdxChildMdxBlogPostImageBirthTime = 'childMdx___childMdxBlogPost___image___birthTime',
  ChildMdxChildMdxBlogPostImageRoot = 'childMdx___childMdxBlogPost___image___root',
  ChildMdxChildMdxBlogPostImageDir = 'childMdx___childMdxBlogPost___image___dir',
  ChildMdxChildMdxBlogPostImageBase = 'childMdx___childMdxBlogPost___image___base',
  ChildMdxChildMdxBlogPostImageExt = 'childMdx___childMdxBlogPost___image___ext',
  ChildMdxChildMdxBlogPostImageName = 'childMdx___childMdxBlogPost___image___name',
  ChildMdxChildMdxBlogPostImageRelativeDirectory = 'childMdx___childMdxBlogPost___image___relativeDirectory',
  ChildMdxChildMdxBlogPostImageDev = 'childMdx___childMdxBlogPost___image___dev',
  ChildMdxChildMdxBlogPostImageMode = 'childMdx___childMdxBlogPost___image___mode',
  ChildMdxChildMdxBlogPostImageNlink = 'childMdx___childMdxBlogPost___image___nlink',
  ChildMdxChildMdxBlogPostImageUid = 'childMdx___childMdxBlogPost___image___uid',
  ChildMdxChildMdxBlogPostImageGid = 'childMdx___childMdxBlogPost___image___gid',
  ChildMdxChildMdxBlogPostImageRdev = 'childMdx___childMdxBlogPost___image___rdev',
  ChildMdxChildMdxBlogPostImageIno = 'childMdx___childMdxBlogPost___image___ino',
  ChildMdxChildMdxBlogPostImageAtimeMs = 'childMdx___childMdxBlogPost___image___atimeMs',
  ChildMdxChildMdxBlogPostImageMtimeMs = 'childMdx___childMdxBlogPost___image___mtimeMs',
  ChildMdxChildMdxBlogPostImageCtimeMs = 'childMdx___childMdxBlogPost___image___ctimeMs',
  ChildMdxChildMdxBlogPostImageAtime = 'childMdx___childMdxBlogPost___image___atime',
  ChildMdxChildMdxBlogPostImageMtime = 'childMdx___childMdxBlogPost___image___mtime',
  ChildMdxChildMdxBlogPostImageCtime = 'childMdx___childMdxBlogPost___image___ctime',
  ChildMdxChildMdxBlogPostImageBirthtime = 'childMdx___childMdxBlogPost___image___birthtime',
  ChildMdxChildMdxBlogPostImageBirthtimeMs = 'childMdx___childMdxBlogPost___image___birthtimeMs',
  ChildMdxChildMdxBlogPostImageBlksize = 'childMdx___childMdxBlogPost___image___blksize',
  ChildMdxChildMdxBlogPostImageBlocks = 'childMdx___childMdxBlogPost___image___blocks',
  ChildMdxChildMdxBlogPostImagePublicUrl = 'childMdx___childMdxBlogPost___image___publicURL',
  ChildMdxChildMdxBlogPostImageChildrenImageSharp = 'childMdx___childMdxBlogPost___image___childrenImageSharp',
  ChildMdxChildMdxBlogPostImageChildrenMdx = 'childMdx___childMdxBlogPost___image___childrenMdx',
  ChildMdxChildMdxBlogPostImageId = 'childMdx___childMdxBlogPost___image___id',
  ChildMdxChildMdxBlogPostImageChildren = 'childMdx___childMdxBlogPost___image___children',
  ChildMdxChildMdxBlogPostImageAlt = 'childMdx___childMdxBlogPost___imageAlt',
  ChildMdxChildMdxBlogPostBody = 'childMdx___childMdxBlogPost___body',
  ChildMdxChildMdxBlogPostParentId = 'childMdx___childMdxBlogPost___parent___id',
  ChildMdxChildMdxBlogPostParentChildren = 'childMdx___childMdxBlogPost___parent___children',
  ChildMdxChildMdxBlogPostChildren = 'childMdx___childMdxBlogPost___children',
  ChildMdxChildMdxBlogPostChildrenId = 'childMdx___childMdxBlogPost___children___id',
  ChildMdxChildMdxBlogPostChildrenChildren = 'childMdx___childMdxBlogPost___children___children',
  ChildMdxChildMdxBlogPostInternalContent = 'childMdx___childMdxBlogPost___internal___content',
  ChildMdxChildMdxBlogPostInternalContentDigest = 'childMdx___childMdxBlogPost___internal___contentDigest',
  ChildMdxChildMdxBlogPostInternalDescription = 'childMdx___childMdxBlogPost___internal___description',
  ChildMdxChildMdxBlogPostInternalFieldOwners = 'childMdx___childMdxBlogPost___internal___fieldOwners',
  ChildMdxChildMdxBlogPostInternalIgnoreType = 'childMdx___childMdxBlogPost___internal___ignoreType',
  ChildMdxChildMdxBlogPostInternalMediaType = 'childMdx___childMdxBlogPost___internal___mediaType',
  ChildMdxChildMdxBlogPostInternalOwner = 'childMdx___childMdxBlogPost___internal___owner',
  ChildMdxChildMdxBlogPostInternalType = 'childMdx___childMdxBlogPost___internal___type',
  ChildMdxId = 'childMdx___id',
  ChildMdxParentId = 'childMdx___parent___id',
  ChildMdxParentParentId = 'childMdx___parent___parent___id',
  ChildMdxParentParentChildren = 'childMdx___parent___parent___children',
  ChildMdxParentChildren = 'childMdx___parent___children',
  ChildMdxParentChildrenId = 'childMdx___parent___children___id',
  ChildMdxParentChildrenChildren = 'childMdx___parent___children___children',
  ChildMdxParentInternalContent = 'childMdx___parent___internal___content',
  ChildMdxParentInternalContentDigest = 'childMdx___parent___internal___contentDigest',
  ChildMdxParentInternalDescription = 'childMdx___parent___internal___description',
  ChildMdxParentInternalFieldOwners = 'childMdx___parent___internal___fieldOwners',
  ChildMdxParentInternalIgnoreType = 'childMdx___parent___internal___ignoreType',
  ChildMdxParentInternalMediaType = 'childMdx___parent___internal___mediaType',
  ChildMdxParentInternalOwner = 'childMdx___parent___internal___owner',
  ChildMdxParentInternalType = 'childMdx___parent___internal___type',
  ChildMdxChildren = 'childMdx___children',
  ChildMdxChildrenId = 'childMdx___children___id',
  ChildMdxChildrenParentId = 'childMdx___children___parent___id',
  ChildMdxChildrenParentChildren = 'childMdx___children___parent___children',
  ChildMdxChildrenChildren = 'childMdx___children___children',
  ChildMdxChildrenChildrenId = 'childMdx___children___children___id',
  ChildMdxChildrenChildrenChildren = 'childMdx___children___children___children',
  ChildMdxChildrenInternalContent = 'childMdx___children___internal___content',
  ChildMdxChildrenInternalContentDigest = 'childMdx___children___internal___contentDigest',
  ChildMdxChildrenInternalDescription = 'childMdx___children___internal___description',
  ChildMdxChildrenInternalFieldOwners = 'childMdx___children___internal___fieldOwners',
  ChildMdxChildrenInternalIgnoreType = 'childMdx___children___internal___ignoreType',
  ChildMdxChildrenInternalMediaType = 'childMdx___children___internal___mediaType',
  ChildMdxChildrenInternalOwner = 'childMdx___children___internal___owner',
  ChildMdxChildrenInternalType = 'childMdx___children___internal___type',
  ChildMdxInternalContent = 'childMdx___internal___content',
  ChildMdxInternalContentDigest = 'childMdx___internal___contentDigest',
  ChildMdxInternalDescription = 'childMdx___internal___description',
  ChildMdxInternalFieldOwners = 'childMdx___internal___fieldOwners',
  ChildMdxInternalIgnoreType = 'childMdx___internal___ignoreType',
  ChildMdxInternalMediaType = 'childMdx___internal___mediaType',
  ChildMdxInternalOwner = 'childMdx___internal___owner',
  ChildMdxInternalType = 'childMdx___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export enum HeadingsMdx {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION'
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Auto = 'AUTO',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP',
  Avif = 'AVIF'
}

export enum ImageLayout {
  Fixed = 'FIXED',
  Fluid = 'FLUID',
  Constrained = 'CONSTRAINED'
}

export enum ImagePlaceholder {
  DominantColor = 'DOMINANT_COLOR',
  TracedSvg = 'TRACED_SVG',
  Blurred = 'BLURRED',
  None = 'NONE'
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  background?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  ResolutionsOriginalName = 'resolutions___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  SizesOriginalImg = 'sizes___originalImg',
  SizesOriginalName = 'sizes___originalName',
  SizesPresentationWidth = 'sizes___presentationWidth',
  SizesPresentationHeight = 'sizes___presentationHeight',
  GatsbyImageData = 'gatsbyImageData',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  __typename?: 'ImageSharpResolutions';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  __typename?: 'ImageSharpSizes';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type Mdx = Node & {
  __typename?: 'Mdx';
  rawBody: Scalars['String'];
  fileAbsolutePath: Scalars['String'];
  frontmatter?: Maybe<MdxFrontmatter>;
  slug?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  excerpt: Scalars['String'];
  headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>;
  html?: Maybe<Scalars['String']>;
  mdxAST?: Maybe<Scalars['JSON']>;
  tableOfContents?: Maybe<Scalars['JSON']>;
  timeToRead?: Maybe<Scalars['Int']>;
  wordCount?: Maybe<MdxWordCount>;
  /** Returns all children nodes filtered by type MdxBlogPost */
  childrenMdxBlogPost?: Maybe<Array<Maybe<MdxBlogPost>>>;
  /** Returns the first child node of type MdxBlogPost or null if there are no children of given type on this node */
  childMdxBlogPost?: Maybe<MdxBlogPost>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MdxExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MdxHeadingsArgs = {
  depth?: Maybe<HeadingsMdx>;
};


export type MdxTableOfContentsArgs = {
  maxDepth?: Maybe<Scalars['Int']>;
};

export type MdxBlogPost = Node & BlogPost & {
  __typename?: 'MdxBlogPost';
  id: Scalars['ID'];
  title: Scalars['String'];
  slug: Scalars['String'];
  tags: Array<Maybe<Scalars['String']>>;
  date: Scalars['Date'];
  redirectFrom: Array<Maybe<Scalars['String']>>;
  excerpt: Scalars['String'];
  image?: Maybe<File>;
  imageAlt?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MdxBlogPostDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type MdxBlogPostExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
};

export type MdxBlogPostConnection = {
  __typename?: 'MdxBlogPostConnection';
  totalCount: Scalars['Int'];
  edges: Array<MdxBlogPostEdge>;
  nodes: Array<MdxBlogPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MdxBlogPostGroupConnection>;
};


export type MdxBlogPostConnectionDistinctArgs = {
  field: MdxBlogPostFieldsEnum;
};


export type MdxBlogPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MdxBlogPostFieldsEnum;
};

export type MdxBlogPostEdge = {
  __typename?: 'MdxBlogPostEdge';
  next?: Maybe<MdxBlogPost>;
  node: MdxBlogPost;
  previous?: Maybe<MdxBlogPost>;
};

export enum MdxBlogPostFieldsEnum {
  Id = 'id',
  Title = 'title',
  Slug = 'slug',
  Tags = 'tags',
  Date = 'date',
  RedirectFrom = 'redirectFrom',
  Excerpt = 'excerpt',
  ImageSourceInstanceName = 'image___sourceInstanceName',
  ImageAbsolutePath = 'image___absolutePath',
  ImageRelativePath = 'image___relativePath',
  ImageExtension = 'image___extension',
  ImageSize = 'image___size',
  ImagePrettySize = 'image___prettySize',
  ImageModifiedTime = 'image___modifiedTime',
  ImageAccessTime = 'image___accessTime',
  ImageChangeTime = 'image___changeTime',
  ImageBirthTime = 'image___birthTime',
  ImageRoot = 'image___root',
  ImageDir = 'image___dir',
  ImageBase = 'image___base',
  ImageExt = 'image___ext',
  ImageName = 'image___name',
  ImageRelativeDirectory = 'image___relativeDirectory',
  ImageDev = 'image___dev',
  ImageMode = 'image___mode',
  ImageNlink = 'image___nlink',
  ImageUid = 'image___uid',
  ImageGid = 'image___gid',
  ImageRdev = 'image___rdev',
  ImageIno = 'image___ino',
  ImageAtimeMs = 'image___atimeMs',
  ImageMtimeMs = 'image___mtimeMs',
  ImageCtimeMs = 'image___ctimeMs',
  ImageAtime = 'image___atime',
  ImageMtime = 'image___mtime',
  ImageCtime = 'image___ctime',
  ImageBirthtime = 'image___birthtime',
  ImageBirthtimeMs = 'image___birthtimeMs',
  ImageBlksize = 'image___blksize',
  ImageBlocks = 'image___blocks',
  ImagePublicUrl = 'image___publicURL',
  ImageChildrenImageSharp = 'image___childrenImageSharp',
  ImageChildrenImageSharpFixedBase64 = 'image___childrenImageSharp___fixed___base64',
  ImageChildrenImageSharpFixedTracedSvg = 'image___childrenImageSharp___fixed___tracedSVG',
  ImageChildrenImageSharpFixedAspectRatio = 'image___childrenImageSharp___fixed___aspectRatio',
  ImageChildrenImageSharpFixedWidth = 'image___childrenImageSharp___fixed___width',
  ImageChildrenImageSharpFixedHeight = 'image___childrenImageSharp___fixed___height',
  ImageChildrenImageSharpFixedSrc = 'image___childrenImageSharp___fixed___src',
  ImageChildrenImageSharpFixedSrcSet = 'image___childrenImageSharp___fixed___srcSet',
  ImageChildrenImageSharpFixedSrcWebp = 'image___childrenImageSharp___fixed___srcWebp',
  ImageChildrenImageSharpFixedSrcSetWebp = 'image___childrenImageSharp___fixed___srcSetWebp',
  ImageChildrenImageSharpFixedOriginalName = 'image___childrenImageSharp___fixed___originalName',
  ImageChildrenImageSharpResolutionsBase64 = 'image___childrenImageSharp___resolutions___base64',
  ImageChildrenImageSharpResolutionsTracedSvg = 'image___childrenImageSharp___resolutions___tracedSVG',
  ImageChildrenImageSharpResolutionsAspectRatio = 'image___childrenImageSharp___resolutions___aspectRatio',
  ImageChildrenImageSharpResolutionsWidth = 'image___childrenImageSharp___resolutions___width',
  ImageChildrenImageSharpResolutionsHeight = 'image___childrenImageSharp___resolutions___height',
  ImageChildrenImageSharpResolutionsSrc = 'image___childrenImageSharp___resolutions___src',
  ImageChildrenImageSharpResolutionsSrcSet = 'image___childrenImageSharp___resolutions___srcSet',
  ImageChildrenImageSharpResolutionsSrcWebp = 'image___childrenImageSharp___resolutions___srcWebp',
  ImageChildrenImageSharpResolutionsSrcSetWebp = 'image___childrenImageSharp___resolutions___srcSetWebp',
  ImageChildrenImageSharpResolutionsOriginalName = 'image___childrenImageSharp___resolutions___originalName',
  ImageChildrenImageSharpFluidBase64 = 'image___childrenImageSharp___fluid___base64',
  ImageChildrenImageSharpFluidTracedSvg = 'image___childrenImageSharp___fluid___tracedSVG',
  ImageChildrenImageSharpFluidAspectRatio = 'image___childrenImageSharp___fluid___aspectRatio',
  ImageChildrenImageSharpFluidSrc = 'image___childrenImageSharp___fluid___src',
  ImageChildrenImageSharpFluidSrcSet = 'image___childrenImageSharp___fluid___srcSet',
  ImageChildrenImageSharpFluidSrcWebp = 'image___childrenImageSharp___fluid___srcWebp',
  ImageChildrenImageSharpFluidSrcSetWebp = 'image___childrenImageSharp___fluid___srcSetWebp',
  ImageChildrenImageSharpFluidSizes = 'image___childrenImageSharp___fluid___sizes',
  ImageChildrenImageSharpFluidOriginalImg = 'image___childrenImageSharp___fluid___originalImg',
  ImageChildrenImageSharpFluidOriginalName = 'image___childrenImageSharp___fluid___originalName',
  ImageChildrenImageSharpFluidPresentationWidth = 'image___childrenImageSharp___fluid___presentationWidth',
  ImageChildrenImageSharpFluidPresentationHeight = 'image___childrenImageSharp___fluid___presentationHeight',
  ImageChildrenImageSharpSizesBase64 = 'image___childrenImageSharp___sizes___base64',
  ImageChildrenImageSharpSizesTracedSvg = 'image___childrenImageSharp___sizes___tracedSVG',
  ImageChildrenImageSharpSizesAspectRatio = 'image___childrenImageSharp___sizes___aspectRatio',
  ImageChildrenImageSharpSizesSrc = 'image___childrenImageSharp___sizes___src',
  ImageChildrenImageSharpSizesSrcSet = 'image___childrenImageSharp___sizes___srcSet',
  ImageChildrenImageSharpSizesSrcWebp = 'image___childrenImageSharp___sizes___srcWebp',
  ImageChildrenImageSharpSizesSrcSetWebp = 'image___childrenImageSharp___sizes___srcSetWebp',
  ImageChildrenImageSharpSizesSizes = 'image___childrenImageSharp___sizes___sizes',
  ImageChildrenImageSharpSizesOriginalImg = 'image___childrenImageSharp___sizes___originalImg',
  ImageChildrenImageSharpSizesOriginalName = 'image___childrenImageSharp___sizes___originalName',
  ImageChildrenImageSharpSizesPresentationWidth = 'image___childrenImageSharp___sizes___presentationWidth',
  ImageChildrenImageSharpSizesPresentationHeight = 'image___childrenImageSharp___sizes___presentationHeight',
  ImageChildrenImageSharpGatsbyImageData = 'image___childrenImageSharp___gatsbyImageData',
  ImageChildrenImageSharpOriginalWidth = 'image___childrenImageSharp___original___width',
  ImageChildrenImageSharpOriginalHeight = 'image___childrenImageSharp___original___height',
  ImageChildrenImageSharpOriginalSrc = 'image___childrenImageSharp___original___src',
  ImageChildrenImageSharpResizeSrc = 'image___childrenImageSharp___resize___src',
  ImageChildrenImageSharpResizeTracedSvg = 'image___childrenImageSharp___resize___tracedSVG',
  ImageChildrenImageSharpResizeWidth = 'image___childrenImageSharp___resize___width',
  ImageChildrenImageSharpResizeHeight = 'image___childrenImageSharp___resize___height',
  ImageChildrenImageSharpResizeAspectRatio = 'image___childrenImageSharp___resize___aspectRatio',
  ImageChildrenImageSharpResizeOriginalName = 'image___childrenImageSharp___resize___originalName',
  ImageChildrenImageSharpId = 'image___childrenImageSharp___id',
  ImageChildrenImageSharpParentId = 'image___childrenImageSharp___parent___id',
  ImageChildrenImageSharpParentChildren = 'image___childrenImageSharp___parent___children',
  ImageChildrenImageSharpChildren = 'image___childrenImageSharp___children',
  ImageChildrenImageSharpChildrenId = 'image___childrenImageSharp___children___id',
  ImageChildrenImageSharpChildrenChildren = 'image___childrenImageSharp___children___children',
  ImageChildrenImageSharpInternalContent = 'image___childrenImageSharp___internal___content',
  ImageChildrenImageSharpInternalContentDigest = 'image___childrenImageSharp___internal___contentDigest',
  ImageChildrenImageSharpInternalDescription = 'image___childrenImageSharp___internal___description',
  ImageChildrenImageSharpInternalFieldOwners = 'image___childrenImageSharp___internal___fieldOwners',
  ImageChildrenImageSharpInternalIgnoreType = 'image___childrenImageSharp___internal___ignoreType',
  ImageChildrenImageSharpInternalMediaType = 'image___childrenImageSharp___internal___mediaType',
  ImageChildrenImageSharpInternalOwner = 'image___childrenImageSharp___internal___owner',
  ImageChildrenImageSharpInternalType = 'image___childrenImageSharp___internal___type',
  ImageChildImageSharpFixedBase64 = 'image___childImageSharp___fixed___base64',
  ImageChildImageSharpFixedTracedSvg = 'image___childImageSharp___fixed___tracedSVG',
  ImageChildImageSharpFixedAspectRatio = 'image___childImageSharp___fixed___aspectRatio',
  ImageChildImageSharpFixedWidth = 'image___childImageSharp___fixed___width',
  ImageChildImageSharpFixedHeight = 'image___childImageSharp___fixed___height',
  ImageChildImageSharpFixedSrc = 'image___childImageSharp___fixed___src',
  ImageChildImageSharpFixedSrcSet = 'image___childImageSharp___fixed___srcSet',
  ImageChildImageSharpFixedSrcWebp = 'image___childImageSharp___fixed___srcWebp',
  ImageChildImageSharpFixedSrcSetWebp = 'image___childImageSharp___fixed___srcSetWebp',
  ImageChildImageSharpFixedOriginalName = 'image___childImageSharp___fixed___originalName',
  ImageChildImageSharpResolutionsBase64 = 'image___childImageSharp___resolutions___base64',
  ImageChildImageSharpResolutionsTracedSvg = 'image___childImageSharp___resolutions___tracedSVG',
  ImageChildImageSharpResolutionsAspectRatio = 'image___childImageSharp___resolutions___aspectRatio',
  ImageChildImageSharpResolutionsWidth = 'image___childImageSharp___resolutions___width',
  ImageChildImageSharpResolutionsHeight = 'image___childImageSharp___resolutions___height',
  ImageChildImageSharpResolutionsSrc = 'image___childImageSharp___resolutions___src',
  ImageChildImageSharpResolutionsSrcSet = 'image___childImageSharp___resolutions___srcSet',
  ImageChildImageSharpResolutionsSrcWebp = 'image___childImageSharp___resolutions___srcWebp',
  ImageChildImageSharpResolutionsSrcSetWebp = 'image___childImageSharp___resolutions___srcSetWebp',
  ImageChildImageSharpResolutionsOriginalName = 'image___childImageSharp___resolutions___originalName',
  ImageChildImageSharpFluidBase64 = 'image___childImageSharp___fluid___base64',
  ImageChildImageSharpFluidTracedSvg = 'image___childImageSharp___fluid___tracedSVG',
  ImageChildImageSharpFluidAspectRatio = 'image___childImageSharp___fluid___aspectRatio',
  ImageChildImageSharpFluidSrc = 'image___childImageSharp___fluid___src',
  ImageChildImageSharpFluidSrcSet = 'image___childImageSharp___fluid___srcSet',
  ImageChildImageSharpFluidSrcWebp = 'image___childImageSharp___fluid___srcWebp',
  ImageChildImageSharpFluidSrcSetWebp = 'image___childImageSharp___fluid___srcSetWebp',
  ImageChildImageSharpFluidSizes = 'image___childImageSharp___fluid___sizes',
  ImageChildImageSharpFluidOriginalImg = 'image___childImageSharp___fluid___originalImg',
  ImageChildImageSharpFluidOriginalName = 'image___childImageSharp___fluid___originalName',
  ImageChildImageSharpFluidPresentationWidth = 'image___childImageSharp___fluid___presentationWidth',
  ImageChildImageSharpFluidPresentationHeight = 'image___childImageSharp___fluid___presentationHeight',
  ImageChildImageSharpSizesBase64 = 'image___childImageSharp___sizes___base64',
  ImageChildImageSharpSizesTracedSvg = 'image___childImageSharp___sizes___tracedSVG',
  ImageChildImageSharpSizesAspectRatio = 'image___childImageSharp___sizes___aspectRatio',
  ImageChildImageSharpSizesSrc = 'image___childImageSharp___sizes___src',
  ImageChildImageSharpSizesSrcSet = 'image___childImageSharp___sizes___srcSet',
  ImageChildImageSharpSizesSrcWebp = 'image___childImageSharp___sizes___srcWebp',
  ImageChildImageSharpSizesSrcSetWebp = 'image___childImageSharp___sizes___srcSetWebp',
  ImageChildImageSharpSizesSizes = 'image___childImageSharp___sizes___sizes',
  ImageChildImageSharpSizesOriginalImg = 'image___childImageSharp___sizes___originalImg',
  ImageChildImageSharpSizesOriginalName = 'image___childImageSharp___sizes___originalName',
  ImageChildImageSharpSizesPresentationWidth = 'image___childImageSharp___sizes___presentationWidth',
  ImageChildImageSharpSizesPresentationHeight = 'image___childImageSharp___sizes___presentationHeight',
  ImageChildImageSharpGatsbyImageData = 'image___childImageSharp___gatsbyImageData',
  ImageChildImageSharpOriginalWidth = 'image___childImageSharp___original___width',
  ImageChildImageSharpOriginalHeight = 'image___childImageSharp___original___height',
  ImageChildImageSharpOriginalSrc = 'image___childImageSharp___original___src',
  ImageChildImageSharpResizeSrc = 'image___childImageSharp___resize___src',
  ImageChildImageSharpResizeTracedSvg = 'image___childImageSharp___resize___tracedSVG',
  ImageChildImageSharpResizeWidth = 'image___childImageSharp___resize___width',
  ImageChildImageSharpResizeHeight = 'image___childImageSharp___resize___height',
  ImageChildImageSharpResizeAspectRatio = 'image___childImageSharp___resize___aspectRatio',
  ImageChildImageSharpResizeOriginalName = 'image___childImageSharp___resize___originalName',
  ImageChildImageSharpId = 'image___childImageSharp___id',
  ImageChildImageSharpParentId = 'image___childImageSharp___parent___id',
  ImageChildImageSharpParentChildren = 'image___childImageSharp___parent___children',
  ImageChildImageSharpChildren = 'image___childImageSharp___children',
  ImageChildImageSharpChildrenId = 'image___childImageSharp___children___id',
  ImageChildImageSharpChildrenChildren = 'image___childImageSharp___children___children',
  ImageChildImageSharpInternalContent = 'image___childImageSharp___internal___content',
  ImageChildImageSharpInternalContentDigest = 'image___childImageSharp___internal___contentDigest',
  ImageChildImageSharpInternalDescription = 'image___childImageSharp___internal___description',
  ImageChildImageSharpInternalFieldOwners = 'image___childImageSharp___internal___fieldOwners',
  ImageChildImageSharpInternalIgnoreType = 'image___childImageSharp___internal___ignoreType',
  ImageChildImageSharpInternalMediaType = 'image___childImageSharp___internal___mediaType',
  ImageChildImageSharpInternalOwner = 'image___childImageSharp___internal___owner',
  ImageChildImageSharpInternalType = 'image___childImageSharp___internal___type',
  ImageChildrenMdx = 'image___childrenMdx',
  ImageChildrenMdxRawBody = 'image___childrenMdx___rawBody',
  ImageChildrenMdxFileAbsolutePath = 'image___childrenMdx___fileAbsolutePath',
  ImageChildrenMdxFrontmatterTitle = 'image___childrenMdx___frontmatter___title',
  ImageChildrenMdxFrontmatterExcerpt = 'image___childrenMdx___frontmatter___excerpt',
  ImageChildrenMdxFrontmatterDate = 'image___childrenMdx___frontmatter___date',
  ImageChildrenMdxFrontmatterImageAlt = 'image___childrenMdx___frontmatter___imageAlt',
  ImageChildrenMdxFrontmatterTags = 'image___childrenMdx___frontmatter___tags',
  ImageChildrenMdxFrontmatterRedirectFrom = 'image___childrenMdx___frontmatter___redirectFrom',
  ImageChildrenMdxSlug = 'image___childrenMdx___slug',
  ImageChildrenMdxBody = 'image___childrenMdx___body',
  ImageChildrenMdxExcerpt = 'image___childrenMdx___excerpt',
  ImageChildrenMdxHeadings = 'image___childrenMdx___headings',
  ImageChildrenMdxHeadingsValue = 'image___childrenMdx___headings___value',
  ImageChildrenMdxHeadingsDepth = 'image___childrenMdx___headings___depth',
  ImageChildrenMdxHtml = 'image___childrenMdx___html',
  ImageChildrenMdxMdxAst = 'image___childrenMdx___mdxAST',
  ImageChildrenMdxTableOfContents = 'image___childrenMdx___tableOfContents',
  ImageChildrenMdxTimeToRead = 'image___childrenMdx___timeToRead',
  ImageChildrenMdxWordCountParagraphs = 'image___childrenMdx___wordCount___paragraphs',
  ImageChildrenMdxWordCountSentences = 'image___childrenMdx___wordCount___sentences',
  ImageChildrenMdxWordCountWords = 'image___childrenMdx___wordCount___words',
  ImageChildrenMdxChildrenMdxBlogPost = 'image___childrenMdx___childrenMdxBlogPost',
  ImageChildrenMdxChildrenMdxBlogPostId = 'image___childrenMdx___childrenMdxBlogPost___id',
  ImageChildrenMdxChildrenMdxBlogPostTitle = 'image___childrenMdx___childrenMdxBlogPost___title',
  ImageChildrenMdxChildrenMdxBlogPostSlug = 'image___childrenMdx___childrenMdxBlogPost___slug',
  ImageChildrenMdxChildrenMdxBlogPostTags = 'image___childrenMdx___childrenMdxBlogPost___tags',
  ImageChildrenMdxChildrenMdxBlogPostDate = 'image___childrenMdx___childrenMdxBlogPost___date',
  ImageChildrenMdxChildrenMdxBlogPostRedirectFrom = 'image___childrenMdx___childrenMdxBlogPost___redirectFrom',
  ImageChildrenMdxChildrenMdxBlogPostExcerpt = 'image___childrenMdx___childrenMdxBlogPost___excerpt',
  ImageChildrenMdxChildrenMdxBlogPostImageAlt = 'image___childrenMdx___childrenMdxBlogPost___imageAlt',
  ImageChildrenMdxChildrenMdxBlogPostBody = 'image___childrenMdx___childrenMdxBlogPost___body',
  ImageChildrenMdxChildrenMdxBlogPostChildren = 'image___childrenMdx___childrenMdxBlogPost___children',
  ImageChildrenMdxChildMdxBlogPostId = 'image___childrenMdx___childMdxBlogPost___id',
  ImageChildrenMdxChildMdxBlogPostTitle = 'image___childrenMdx___childMdxBlogPost___title',
  ImageChildrenMdxChildMdxBlogPostSlug = 'image___childrenMdx___childMdxBlogPost___slug',
  ImageChildrenMdxChildMdxBlogPostTags = 'image___childrenMdx___childMdxBlogPost___tags',
  ImageChildrenMdxChildMdxBlogPostDate = 'image___childrenMdx___childMdxBlogPost___date',
  ImageChildrenMdxChildMdxBlogPostRedirectFrom = 'image___childrenMdx___childMdxBlogPost___redirectFrom',
  ImageChildrenMdxChildMdxBlogPostExcerpt = 'image___childrenMdx___childMdxBlogPost___excerpt',
  ImageChildrenMdxChildMdxBlogPostImageAlt = 'image___childrenMdx___childMdxBlogPost___imageAlt',
  ImageChildrenMdxChildMdxBlogPostBody = 'image___childrenMdx___childMdxBlogPost___body',
  ImageChildrenMdxChildMdxBlogPostChildren = 'image___childrenMdx___childMdxBlogPost___children',
  ImageChildrenMdxId = 'image___childrenMdx___id',
  ImageChildrenMdxParentId = 'image___childrenMdx___parent___id',
  ImageChildrenMdxParentChildren = 'image___childrenMdx___parent___children',
  ImageChildrenMdxChildren = 'image___childrenMdx___children',
  ImageChildrenMdxChildrenId = 'image___childrenMdx___children___id',
  ImageChildrenMdxChildrenChildren = 'image___childrenMdx___children___children',
  ImageChildrenMdxInternalContent = 'image___childrenMdx___internal___content',
  ImageChildrenMdxInternalContentDigest = 'image___childrenMdx___internal___contentDigest',
  ImageChildrenMdxInternalDescription = 'image___childrenMdx___internal___description',
  ImageChildrenMdxInternalFieldOwners = 'image___childrenMdx___internal___fieldOwners',
  ImageChildrenMdxInternalIgnoreType = 'image___childrenMdx___internal___ignoreType',
  ImageChildrenMdxInternalMediaType = 'image___childrenMdx___internal___mediaType',
  ImageChildrenMdxInternalOwner = 'image___childrenMdx___internal___owner',
  ImageChildrenMdxInternalType = 'image___childrenMdx___internal___type',
  ImageChildMdxRawBody = 'image___childMdx___rawBody',
  ImageChildMdxFileAbsolutePath = 'image___childMdx___fileAbsolutePath',
  ImageChildMdxFrontmatterTitle = 'image___childMdx___frontmatter___title',
  ImageChildMdxFrontmatterExcerpt = 'image___childMdx___frontmatter___excerpt',
  ImageChildMdxFrontmatterDate = 'image___childMdx___frontmatter___date',
  ImageChildMdxFrontmatterImageAlt = 'image___childMdx___frontmatter___imageAlt',
  ImageChildMdxFrontmatterTags = 'image___childMdx___frontmatter___tags',
  ImageChildMdxFrontmatterRedirectFrom = 'image___childMdx___frontmatter___redirectFrom',
  ImageChildMdxSlug = 'image___childMdx___slug',
  ImageChildMdxBody = 'image___childMdx___body',
  ImageChildMdxExcerpt = 'image___childMdx___excerpt',
  ImageChildMdxHeadings = 'image___childMdx___headings',
  ImageChildMdxHeadingsValue = 'image___childMdx___headings___value',
  ImageChildMdxHeadingsDepth = 'image___childMdx___headings___depth',
  ImageChildMdxHtml = 'image___childMdx___html',
  ImageChildMdxMdxAst = 'image___childMdx___mdxAST',
  ImageChildMdxTableOfContents = 'image___childMdx___tableOfContents',
  ImageChildMdxTimeToRead = 'image___childMdx___timeToRead',
  ImageChildMdxWordCountParagraphs = 'image___childMdx___wordCount___paragraphs',
  ImageChildMdxWordCountSentences = 'image___childMdx___wordCount___sentences',
  ImageChildMdxWordCountWords = 'image___childMdx___wordCount___words',
  ImageChildMdxChildrenMdxBlogPost = 'image___childMdx___childrenMdxBlogPost',
  ImageChildMdxChildrenMdxBlogPostId = 'image___childMdx___childrenMdxBlogPost___id',
  ImageChildMdxChildrenMdxBlogPostTitle = 'image___childMdx___childrenMdxBlogPost___title',
  ImageChildMdxChildrenMdxBlogPostSlug = 'image___childMdx___childrenMdxBlogPost___slug',
  ImageChildMdxChildrenMdxBlogPostTags = 'image___childMdx___childrenMdxBlogPost___tags',
  ImageChildMdxChildrenMdxBlogPostDate = 'image___childMdx___childrenMdxBlogPost___date',
  ImageChildMdxChildrenMdxBlogPostRedirectFrom = 'image___childMdx___childrenMdxBlogPost___redirectFrom',
  ImageChildMdxChildrenMdxBlogPostExcerpt = 'image___childMdx___childrenMdxBlogPost___excerpt',
  ImageChildMdxChildrenMdxBlogPostImageAlt = 'image___childMdx___childrenMdxBlogPost___imageAlt',
  ImageChildMdxChildrenMdxBlogPostBody = 'image___childMdx___childrenMdxBlogPost___body',
  ImageChildMdxChildrenMdxBlogPostChildren = 'image___childMdx___childrenMdxBlogPost___children',
  ImageChildMdxChildMdxBlogPostId = 'image___childMdx___childMdxBlogPost___id',
  ImageChildMdxChildMdxBlogPostTitle = 'image___childMdx___childMdxBlogPost___title',
  ImageChildMdxChildMdxBlogPostSlug = 'image___childMdx___childMdxBlogPost___slug',
  ImageChildMdxChildMdxBlogPostTags = 'image___childMdx___childMdxBlogPost___tags',
  ImageChildMdxChildMdxBlogPostDate = 'image___childMdx___childMdxBlogPost___date',
  ImageChildMdxChildMdxBlogPostRedirectFrom = 'image___childMdx___childMdxBlogPost___redirectFrom',
  ImageChildMdxChildMdxBlogPostExcerpt = 'image___childMdx___childMdxBlogPost___excerpt',
  ImageChildMdxChildMdxBlogPostImageAlt = 'image___childMdx___childMdxBlogPost___imageAlt',
  ImageChildMdxChildMdxBlogPostBody = 'image___childMdx___childMdxBlogPost___body',
  ImageChildMdxChildMdxBlogPostChildren = 'image___childMdx___childMdxBlogPost___children',
  ImageChildMdxId = 'image___childMdx___id',
  ImageChildMdxParentId = 'image___childMdx___parent___id',
  ImageChildMdxParentChildren = 'image___childMdx___parent___children',
  ImageChildMdxChildren = 'image___childMdx___children',
  ImageChildMdxChildrenId = 'image___childMdx___children___id',
  ImageChildMdxChildrenChildren = 'image___childMdx___children___children',
  ImageChildMdxInternalContent = 'image___childMdx___internal___content',
  ImageChildMdxInternalContentDigest = 'image___childMdx___internal___contentDigest',
  ImageChildMdxInternalDescription = 'image___childMdx___internal___description',
  ImageChildMdxInternalFieldOwners = 'image___childMdx___internal___fieldOwners',
  ImageChildMdxInternalIgnoreType = 'image___childMdx___internal___ignoreType',
  ImageChildMdxInternalMediaType = 'image___childMdx___internal___mediaType',
  ImageChildMdxInternalOwner = 'image___childMdx___internal___owner',
  ImageChildMdxInternalType = 'image___childMdx___internal___type',
  ImageId = 'image___id',
  ImageParentId = 'image___parent___id',
  ImageParentParentId = 'image___parent___parent___id',
  ImageParentParentChildren = 'image___parent___parent___children',
  ImageParentChildren = 'image___parent___children',
  ImageParentChildrenId = 'image___parent___children___id',
  ImageParentChildrenChildren = 'image___parent___children___children',
  ImageParentInternalContent = 'image___parent___internal___content',
  ImageParentInternalContentDigest = 'image___parent___internal___contentDigest',
  ImageParentInternalDescription = 'image___parent___internal___description',
  ImageParentInternalFieldOwners = 'image___parent___internal___fieldOwners',
  ImageParentInternalIgnoreType = 'image___parent___internal___ignoreType',
  ImageParentInternalMediaType = 'image___parent___internal___mediaType',
  ImageParentInternalOwner = 'image___parent___internal___owner',
  ImageParentInternalType = 'image___parent___internal___type',
  ImageChildren = 'image___children',
  ImageChildrenId = 'image___children___id',
  ImageChildrenParentId = 'image___children___parent___id',
  ImageChildrenParentChildren = 'image___children___parent___children',
  ImageChildrenChildren = 'image___children___children',
  ImageChildrenChildrenId = 'image___children___children___id',
  ImageChildrenChildrenChildren = 'image___children___children___children',
  ImageChildrenInternalContent = 'image___children___internal___content',
  ImageChildrenInternalContentDigest = 'image___children___internal___contentDigest',
  ImageChildrenInternalDescription = 'image___children___internal___description',
  ImageChildrenInternalFieldOwners = 'image___children___internal___fieldOwners',
  ImageChildrenInternalIgnoreType = 'image___children___internal___ignoreType',
  ImageChildrenInternalMediaType = 'image___children___internal___mediaType',
  ImageChildrenInternalOwner = 'image___children___internal___owner',
  ImageChildrenInternalType = 'image___children___internal___type',
  ImageInternalContent = 'image___internal___content',
  ImageInternalContentDigest = 'image___internal___contentDigest',
  ImageInternalDescription = 'image___internal___description',
  ImageInternalFieldOwners = 'image___internal___fieldOwners',
  ImageInternalIgnoreType = 'image___internal___ignoreType',
  ImageInternalMediaType = 'image___internal___mediaType',
  ImageInternalOwner = 'image___internal___owner',
  ImageInternalType = 'image___internal___type',
  ImageAlt = 'imageAlt',
  Body = 'body',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type MdxBlogPostFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  redirectFrom?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<FileFilterInput>;
  imageAlt?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MdxBlogPostFilterListInput = {
  elemMatch?: Maybe<MdxBlogPostFilterInput>;
};

export type MdxBlogPostGroupConnection = {
  __typename?: 'MdxBlogPostGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<MdxBlogPostEdge>;
  nodes: Array<MdxBlogPost>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MdxBlogPostSortInput = {
  fields?: Maybe<Array<Maybe<MdxBlogPostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MdxConnection = {
  __typename?: 'MdxConnection';
  totalCount: Scalars['Int'];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MdxGroupConnection>;
};


export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

export type MdxEdge = {
  __typename?: 'MdxEdge';
  next?: Maybe<Mdx>;
  node: Mdx;
  previous?: Maybe<Mdx>;
};

export enum MdxFieldsEnum {
  RawBody = 'rawBody',
  FileAbsolutePath = 'fileAbsolutePath',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterExcerpt = 'frontmatter___excerpt',
  FrontmatterDate = 'frontmatter___date',
  FrontmatterImageSourceInstanceName = 'frontmatter___image___sourceInstanceName',
  FrontmatterImageAbsolutePath = 'frontmatter___image___absolutePath',
  FrontmatterImageRelativePath = 'frontmatter___image___relativePath',
  FrontmatterImageExtension = 'frontmatter___image___extension',
  FrontmatterImageSize = 'frontmatter___image___size',
  FrontmatterImagePrettySize = 'frontmatter___image___prettySize',
  FrontmatterImageModifiedTime = 'frontmatter___image___modifiedTime',
  FrontmatterImageAccessTime = 'frontmatter___image___accessTime',
  FrontmatterImageChangeTime = 'frontmatter___image___changeTime',
  FrontmatterImageBirthTime = 'frontmatter___image___birthTime',
  FrontmatterImageRoot = 'frontmatter___image___root',
  FrontmatterImageDir = 'frontmatter___image___dir',
  FrontmatterImageBase = 'frontmatter___image___base',
  FrontmatterImageExt = 'frontmatter___image___ext',
  FrontmatterImageName = 'frontmatter___image___name',
  FrontmatterImageRelativeDirectory = 'frontmatter___image___relativeDirectory',
  FrontmatterImageDev = 'frontmatter___image___dev',
  FrontmatterImageMode = 'frontmatter___image___mode',
  FrontmatterImageNlink = 'frontmatter___image___nlink',
  FrontmatterImageUid = 'frontmatter___image___uid',
  FrontmatterImageGid = 'frontmatter___image___gid',
  FrontmatterImageRdev = 'frontmatter___image___rdev',
  FrontmatterImageIno = 'frontmatter___image___ino',
  FrontmatterImageAtimeMs = 'frontmatter___image___atimeMs',
  FrontmatterImageMtimeMs = 'frontmatter___image___mtimeMs',
  FrontmatterImageCtimeMs = 'frontmatter___image___ctimeMs',
  FrontmatterImageAtime = 'frontmatter___image___atime',
  FrontmatterImageMtime = 'frontmatter___image___mtime',
  FrontmatterImageCtime = 'frontmatter___image___ctime',
  FrontmatterImageBirthtime = 'frontmatter___image___birthtime',
  FrontmatterImageBirthtimeMs = 'frontmatter___image___birthtimeMs',
  FrontmatterImageBlksize = 'frontmatter___image___blksize',
  FrontmatterImageBlocks = 'frontmatter___image___blocks',
  FrontmatterImagePublicUrl = 'frontmatter___image___publicURL',
  FrontmatterImageChildrenImageSharp = 'frontmatter___image___childrenImageSharp',
  FrontmatterImageChildrenImageSharpGatsbyImageData = 'frontmatter___image___childrenImageSharp___gatsbyImageData',
  FrontmatterImageChildrenImageSharpId = 'frontmatter___image___childrenImageSharp___id',
  FrontmatterImageChildrenImageSharpChildren = 'frontmatter___image___childrenImageSharp___children',
  FrontmatterImageChildImageSharpGatsbyImageData = 'frontmatter___image___childImageSharp___gatsbyImageData',
  FrontmatterImageChildImageSharpId = 'frontmatter___image___childImageSharp___id',
  FrontmatterImageChildImageSharpChildren = 'frontmatter___image___childImageSharp___children',
  FrontmatterImageChildrenMdx = 'frontmatter___image___childrenMdx',
  FrontmatterImageChildrenMdxRawBody = 'frontmatter___image___childrenMdx___rawBody',
  FrontmatterImageChildrenMdxFileAbsolutePath = 'frontmatter___image___childrenMdx___fileAbsolutePath',
  FrontmatterImageChildrenMdxSlug = 'frontmatter___image___childrenMdx___slug',
  FrontmatterImageChildrenMdxBody = 'frontmatter___image___childrenMdx___body',
  FrontmatterImageChildrenMdxExcerpt = 'frontmatter___image___childrenMdx___excerpt',
  FrontmatterImageChildrenMdxHeadings = 'frontmatter___image___childrenMdx___headings',
  FrontmatterImageChildrenMdxHtml = 'frontmatter___image___childrenMdx___html',
  FrontmatterImageChildrenMdxMdxAst = 'frontmatter___image___childrenMdx___mdxAST',
  FrontmatterImageChildrenMdxTableOfContents = 'frontmatter___image___childrenMdx___tableOfContents',
  FrontmatterImageChildrenMdxTimeToRead = 'frontmatter___image___childrenMdx___timeToRead',
  FrontmatterImageChildrenMdxChildrenMdxBlogPost = 'frontmatter___image___childrenMdx___childrenMdxBlogPost',
  FrontmatterImageChildrenMdxId = 'frontmatter___image___childrenMdx___id',
  FrontmatterImageChildrenMdxChildren = 'frontmatter___image___childrenMdx___children',
  FrontmatterImageChildMdxRawBody = 'frontmatter___image___childMdx___rawBody',
  FrontmatterImageChildMdxFileAbsolutePath = 'frontmatter___image___childMdx___fileAbsolutePath',
  FrontmatterImageChildMdxSlug = 'frontmatter___image___childMdx___slug',
  FrontmatterImageChildMdxBody = 'frontmatter___image___childMdx___body',
  FrontmatterImageChildMdxExcerpt = 'frontmatter___image___childMdx___excerpt',
  FrontmatterImageChildMdxHeadings = 'frontmatter___image___childMdx___headings',
  FrontmatterImageChildMdxHtml = 'frontmatter___image___childMdx___html',
  FrontmatterImageChildMdxMdxAst = 'frontmatter___image___childMdx___mdxAST',
  FrontmatterImageChildMdxTableOfContents = 'frontmatter___image___childMdx___tableOfContents',
  FrontmatterImageChildMdxTimeToRead = 'frontmatter___image___childMdx___timeToRead',
  FrontmatterImageChildMdxChildrenMdxBlogPost = 'frontmatter___image___childMdx___childrenMdxBlogPost',
  FrontmatterImageChildMdxId = 'frontmatter___image___childMdx___id',
  FrontmatterImageChildMdxChildren = 'frontmatter___image___childMdx___children',
  FrontmatterImageId = 'frontmatter___image___id',
  FrontmatterImageParentId = 'frontmatter___image___parent___id',
  FrontmatterImageParentChildren = 'frontmatter___image___parent___children',
  FrontmatterImageChildren = 'frontmatter___image___children',
  FrontmatterImageChildrenId = 'frontmatter___image___children___id',
  FrontmatterImageChildrenChildren = 'frontmatter___image___children___children',
  FrontmatterImageInternalContent = 'frontmatter___image___internal___content',
  FrontmatterImageInternalContentDigest = 'frontmatter___image___internal___contentDigest',
  FrontmatterImageInternalDescription = 'frontmatter___image___internal___description',
  FrontmatterImageInternalFieldOwners = 'frontmatter___image___internal___fieldOwners',
  FrontmatterImageInternalIgnoreType = 'frontmatter___image___internal___ignoreType',
  FrontmatterImageInternalMediaType = 'frontmatter___image___internal___mediaType',
  FrontmatterImageInternalOwner = 'frontmatter___image___internal___owner',
  FrontmatterImageInternalType = 'frontmatter___image___internal___type',
  FrontmatterImageAlt = 'frontmatter___imageAlt',
  FrontmatterTags = 'frontmatter___tags',
  FrontmatterRedirectFrom = 'frontmatter___redirectFrom',
  Slug = 'slug',
  Body = 'body',
  Excerpt = 'excerpt',
  Headings = 'headings',
  HeadingsValue = 'headings___value',
  HeadingsDepth = 'headings___depth',
  Html = 'html',
  MdxAst = 'mdxAST',
  TableOfContents = 'tableOfContents',
  TimeToRead = 'timeToRead',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
  ChildrenMdxBlogPost = 'childrenMdxBlogPost',
  ChildrenMdxBlogPostId = 'childrenMdxBlogPost___id',
  ChildrenMdxBlogPostTitle = 'childrenMdxBlogPost___title',
  ChildrenMdxBlogPostSlug = 'childrenMdxBlogPost___slug',
  ChildrenMdxBlogPostTags = 'childrenMdxBlogPost___tags',
  ChildrenMdxBlogPostDate = 'childrenMdxBlogPost___date',
  ChildrenMdxBlogPostRedirectFrom = 'childrenMdxBlogPost___redirectFrom',
  ChildrenMdxBlogPostExcerpt = 'childrenMdxBlogPost___excerpt',
  ChildrenMdxBlogPostImageSourceInstanceName = 'childrenMdxBlogPost___image___sourceInstanceName',
  ChildrenMdxBlogPostImageAbsolutePath = 'childrenMdxBlogPost___image___absolutePath',
  ChildrenMdxBlogPostImageRelativePath = 'childrenMdxBlogPost___image___relativePath',
  ChildrenMdxBlogPostImageExtension = 'childrenMdxBlogPost___image___extension',
  ChildrenMdxBlogPostImageSize = 'childrenMdxBlogPost___image___size',
  ChildrenMdxBlogPostImagePrettySize = 'childrenMdxBlogPost___image___prettySize',
  ChildrenMdxBlogPostImageModifiedTime = 'childrenMdxBlogPost___image___modifiedTime',
  ChildrenMdxBlogPostImageAccessTime = 'childrenMdxBlogPost___image___accessTime',
  ChildrenMdxBlogPostImageChangeTime = 'childrenMdxBlogPost___image___changeTime',
  ChildrenMdxBlogPostImageBirthTime = 'childrenMdxBlogPost___image___birthTime',
  ChildrenMdxBlogPostImageRoot = 'childrenMdxBlogPost___image___root',
  ChildrenMdxBlogPostImageDir = 'childrenMdxBlogPost___image___dir',
  ChildrenMdxBlogPostImageBase = 'childrenMdxBlogPost___image___base',
  ChildrenMdxBlogPostImageExt = 'childrenMdxBlogPost___image___ext',
  ChildrenMdxBlogPostImageName = 'childrenMdxBlogPost___image___name',
  ChildrenMdxBlogPostImageRelativeDirectory = 'childrenMdxBlogPost___image___relativeDirectory',
  ChildrenMdxBlogPostImageDev = 'childrenMdxBlogPost___image___dev',
  ChildrenMdxBlogPostImageMode = 'childrenMdxBlogPost___image___mode',
  ChildrenMdxBlogPostImageNlink = 'childrenMdxBlogPost___image___nlink',
  ChildrenMdxBlogPostImageUid = 'childrenMdxBlogPost___image___uid',
  ChildrenMdxBlogPostImageGid = 'childrenMdxBlogPost___image___gid',
  ChildrenMdxBlogPostImageRdev = 'childrenMdxBlogPost___image___rdev',
  ChildrenMdxBlogPostImageIno = 'childrenMdxBlogPost___image___ino',
  ChildrenMdxBlogPostImageAtimeMs = 'childrenMdxBlogPost___image___atimeMs',
  ChildrenMdxBlogPostImageMtimeMs = 'childrenMdxBlogPost___image___mtimeMs',
  ChildrenMdxBlogPostImageCtimeMs = 'childrenMdxBlogPost___image___ctimeMs',
  ChildrenMdxBlogPostImageAtime = 'childrenMdxBlogPost___image___atime',
  ChildrenMdxBlogPostImageMtime = 'childrenMdxBlogPost___image___mtime',
  ChildrenMdxBlogPostImageCtime = 'childrenMdxBlogPost___image___ctime',
  ChildrenMdxBlogPostImageBirthtime = 'childrenMdxBlogPost___image___birthtime',
  ChildrenMdxBlogPostImageBirthtimeMs = 'childrenMdxBlogPost___image___birthtimeMs',
  ChildrenMdxBlogPostImageBlksize = 'childrenMdxBlogPost___image___blksize',
  ChildrenMdxBlogPostImageBlocks = 'childrenMdxBlogPost___image___blocks',
  ChildrenMdxBlogPostImagePublicUrl = 'childrenMdxBlogPost___image___publicURL',
  ChildrenMdxBlogPostImageChildrenImageSharp = 'childrenMdxBlogPost___image___childrenImageSharp',
  ChildrenMdxBlogPostImageChildrenImageSharpGatsbyImageData = 'childrenMdxBlogPost___image___childrenImageSharp___gatsbyImageData',
  ChildrenMdxBlogPostImageChildrenImageSharpId = 'childrenMdxBlogPost___image___childrenImageSharp___id',
  ChildrenMdxBlogPostImageChildrenImageSharpChildren = 'childrenMdxBlogPost___image___childrenImageSharp___children',
  ChildrenMdxBlogPostImageChildImageSharpGatsbyImageData = 'childrenMdxBlogPost___image___childImageSharp___gatsbyImageData',
  ChildrenMdxBlogPostImageChildImageSharpId = 'childrenMdxBlogPost___image___childImageSharp___id',
  ChildrenMdxBlogPostImageChildImageSharpChildren = 'childrenMdxBlogPost___image___childImageSharp___children',
  ChildrenMdxBlogPostImageChildrenMdx = 'childrenMdxBlogPost___image___childrenMdx',
  ChildrenMdxBlogPostImageChildrenMdxRawBody = 'childrenMdxBlogPost___image___childrenMdx___rawBody',
  ChildrenMdxBlogPostImageChildrenMdxFileAbsolutePath = 'childrenMdxBlogPost___image___childrenMdx___fileAbsolutePath',
  ChildrenMdxBlogPostImageChildrenMdxSlug = 'childrenMdxBlogPost___image___childrenMdx___slug',
  ChildrenMdxBlogPostImageChildrenMdxBody = 'childrenMdxBlogPost___image___childrenMdx___body',
  ChildrenMdxBlogPostImageChildrenMdxExcerpt = 'childrenMdxBlogPost___image___childrenMdx___excerpt',
  ChildrenMdxBlogPostImageChildrenMdxHeadings = 'childrenMdxBlogPost___image___childrenMdx___headings',
  ChildrenMdxBlogPostImageChildrenMdxHtml = 'childrenMdxBlogPost___image___childrenMdx___html',
  ChildrenMdxBlogPostImageChildrenMdxMdxAst = 'childrenMdxBlogPost___image___childrenMdx___mdxAST',
  ChildrenMdxBlogPostImageChildrenMdxTableOfContents = 'childrenMdxBlogPost___image___childrenMdx___tableOfContents',
  ChildrenMdxBlogPostImageChildrenMdxTimeToRead = 'childrenMdxBlogPost___image___childrenMdx___timeToRead',
  ChildrenMdxBlogPostImageChildrenMdxChildrenMdxBlogPost = 'childrenMdxBlogPost___image___childrenMdx___childrenMdxBlogPost',
  ChildrenMdxBlogPostImageChildrenMdxId = 'childrenMdxBlogPost___image___childrenMdx___id',
  ChildrenMdxBlogPostImageChildrenMdxChildren = 'childrenMdxBlogPost___image___childrenMdx___children',
  ChildrenMdxBlogPostImageChildMdxRawBody = 'childrenMdxBlogPost___image___childMdx___rawBody',
  ChildrenMdxBlogPostImageChildMdxFileAbsolutePath = 'childrenMdxBlogPost___image___childMdx___fileAbsolutePath',
  ChildrenMdxBlogPostImageChildMdxSlug = 'childrenMdxBlogPost___image___childMdx___slug',
  ChildrenMdxBlogPostImageChildMdxBody = 'childrenMdxBlogPost___image___childMdx___body',
  ChildrenMdxBlogPostImageChildMdxExcerpt = 'childrenMdxBlogPost___image___childMdx___excerpt',
  ChildrenMdxBlogPostImageChildMdxHeadings = 'childrenMdxBlogPost___image___childMdx___headings',
  ChildrenMdxBlogPostImageChildMdxHtml = 'childrenMdxBlogPost___image___childMdx___html',
  ChildrenMdxBlogPostImageChildMdxMdxAst = 'childrenMdxBlogPost___image___childMdx___mdxAST',
  ChildrenMdxBlogPostImageChildMdxTableOfContents = 'childrenMdxBlogPost___image___childMdx___tableOfContents',
  ChildrenMdxBlogPostImageChildMdxTimeToRead = 'childrenMdxBlogPost___image___childMdx___timeToRead',
  ChildrenMdxBlogPostImageChildMdxChildrenMdxBlogPost = 'childrenMdxBlogPost___image___childMdx___childrenMdxBlogPost',
  ChildrenMdxBlogPostImageChildMdxId = 'childrenMdxBlogPost___image___childMdx___id',
  ChildrenMdxBlogPostImageChildMdxChildren = 'childrenMdxBlogPost___image___childMdx___children',
  ChildrenMdxBlogPostImageId = 'childrenMdxBlogPost___image___id',
  ChildrenMdxBlogPostImageParentId = 'childrenMdxBlogPost___image___parent___id',
  ChildrenMdxBlogPostImageParentChildren = 'childrenMdxBlogPost___image___parent___children',
  ChildrenMdxBlogPostImageChildren = 'childrenMdxBlogPost___image___children',
  ChildrenMdxBlogPostImageChildrenId = 'childrenMdxBlogPost___image___children___id',
  ChildrenMdxBlogPostImageChildrenChildren = 'childrenMdxBlogPost___image___children___children',
  ChildrenMdxBlogPostImageInternalContent = 'childrenMdxBlogPost___image___internal___content',
  ChildrenMdxBlogPostImageInternalContentDigest = 'childrenMdxBlogPost___image___internal___contentDigest',
  ChildrenMdxBlogPostImageInternalDescription = 'childrenMdxBlogPost___image___internal___description',
  ChildrenMdxBlogPostImageInternalFieldOwners = 'childrenMdxBlogPost___image___internal___fieldOwners',
  ChildrenMdxBlogPostImageInternalIgnoreType = 'childrenMdxBlogPost___image___internal___ignoreType',
  ChildrenMdxBlogPostImageInternalMediaType = 'childrenMdxBlogPost___image___internal___mediaType',
  ChildrenMdxBlogPostImageInternalOwner = 'childrenMdxBlogPost___image___internal___owner',
  ChildrenMdxBlogPostImageInternalType = 'childrenMdxBlogPost___image___internal___type',
  ChildrenMdxBlogPostImageAlt = 'childrenMdxBlogPost___imageAlt',
  ChildrenMdxBlogPostBody = 'childrenMdxBlogPost___body',
  ChildrenMdxBlogPostParentId = 'childrenMdxBlogPost___parent___id',
  ChildrenMdxBlogPostParentParentId = 'childrenMdxBlogPost___parent___parent___id',
  ChildrenMdxBlogPostParentParentChildren = 'childrenMdxBlogPost___parent___parent___children',
  ChildrenMdxBlogPostParentChildren = 'childrenMdxBlogPost___parent___children',
  ChildrenMdxBlogPostParentChildrenId = 'childrenMdxBlogPost___parent___children___id',
  ChildrenMdxBlogPostParentChildrenChildren = 'childrenMdxBlogPost___parent___children___children',
  ChildrenMdxBlogPostParentInternalContent = 'childrenMdxBlogPost___parent___internal___content',
  ChildrenMdxBlogPostParentInternalContentDigest = 'childrenMdxBlogPost___parent___internal___contentDigest',
  ChildrenMdxBlogPostParentInternalDescription = 'childrenMdxBlogPost___parent___internal___description',
  ChildrenMdxBlogPostParentInternalFieldOwners = 'childrenMdxBlogPost___parent___internal___fieldOwners',
  ChildrenMdxBlogPostParentInternalIgnoreType = 'childrenMdxBlogPost___parent___internal___ignoreType',
  ChildrenMdxBlogPostParentInternalMediaType = 'childrenMdxBlogPost___parent___internal___mediaType',
  ChildrenMdxBlogPostParentInternalOwner = 'childrenMdxBlogPost___parent___internal___owner',
  ChildrenMdxBlogPostParentInternalType = 'childrenMdxBlogPost___parent___internal___type',
  ChildrenMdxBlogPostChildren = 'childrenMdxBlogPost___children',
  ChildrenMdxBlogPostChildrenId = 'childrenMdxBlogPost___children___id',
  ChildrenMdxBlogPostChildrenParentId = 'childrenMdxBlogPost___children___parent___id',
  ChildrenMdxBlogPostChildrenParentChildren = 'childrenMdxBlogPost___children___parent___children',
  ChildrenMdxBlogPostChildrenChildren = 'childrenMdxBlogPost___children___children',
  ChildrenMdxBlogPostChildrenChildrenId = 'childrenMdxBlogPost___children___children___id',
  ChildrenMdxBlogPostChildrenChildrenChildren = 'childrenMdxBlogPost___children___children___children',
  ChildrenMdxBlogPostChildrenInternalContent = 'childrenMdxBlogPost___children___internal___content',
  ChildrenMdxBlogPostChildrenInternalContentDigest = 'childrenMdxBlogPost___children___internal___contentDigest',
  ChildrenMdxBlogPostChildrenInternalDescription = 'childrenMdxBlogPost___children___internal___description',
  ChildrenMdxBlogPostChildrenInternalFieldOwners = 'childrenMdxBlogPost___children___internal___fieldOwners',
  ChildrenMdxBlogPostChildrenInternalIgnoreType = 'childrenMdxBlogPost___children___internal___ignoreType',
  ChildrenMdxBlogPostChildrenInternalMediaType = 'childrenMdxBlogPost___children___internal___mediaType',
  ChildrenMdxBlogPostChildrenInternalOwner = 'childrenMdxBlogPost___children___internal___owner',
  ChildrenMdxBlogPostChildrenInternalType = 'childrenMdxBlogPost___children___internal___type',
  ChildrenMdxBlogPostInternalContent = 'childrenMdxBlogPost___internal___content',
  ChildrenMdxBlogPostInternalContentDigest = 'childrenMdxBlogPost___internal___contentDigest',
  ChildrenMdxBlogPostInternalDescription = 'childrenMdxBlogPost___internal___description',
  ChildrenMdxBlogPostInternalFieldOwners = 'childrenMdxBlogPost___internal___fieldOwners',
  ChildrenMdxBlogPostInternalIgnoreType = 'childrenMdxBlogPost___internal___ignoreType',
  ChildrenMdxBlogPostInternalMediaType = 'childrenMdxBlogPost___internal___mediaType',
  ChildrenMdxBlogPostInternalOwner = 'childrenMdxBlogPost___internal___owner',
  ChildrenMdxBlogPostInternalType = 'childrenMdxBlogPost___internal___type',
  ChildMdxBlogPostId = 'childMdxBlogPost___id',
  ChildMdxBlogPostTitle = 'childMdxBlogPost___title',
  ChildMdxBlogPostSlug = 'childMdxBlogPost___slug',
  ChildMdxBlogPostTags = 'childMdxBlogPost___tags',
  ChildMdxBlogPostDate = 'childMdxBlogPost___date',
  ChildMdxBlogPostRedirectFrom = 'childMdxBlogPost___redirectFrom',
  ChildMdxBlogPostExcerpt = 'childMdxBlogPost___excerpt',
  ChildMdxBlogPostImageSourceInstanceName = 'childMdxBlogPost___image___sourceInstanceName',
  ChildMdxBlogPostImageAbsolutePath = 'childMdxBlogPost___image___absolutePath',
  ChildMdxBlogPostImageRelativePath = 'childMdxBlogPost___image___relativePath',
  ChildMdxBlogPostImageExtension = 'childMdxBlogPost___image___extension',
  ChildMdxBlogPostImageSize = 'childMdxBlogPost___image___size',
  ChildMdxBlogPostImagePrettySize = 'childMdxBlogPost___image___prettySize',
  ChildMdxBlogPostImageModifiedTime = 'childMdxBlogPost___image___modifiedTime',
  ChildMdxBlogPostImageAccessTime = 'childMdxBlogPost___image___accessTime',
  ChildMdxBlogPostImageChangeTime = 'childMdxBlogPost___image___changeTime',
  ChildMdxBlogPostImageBirthTime = 'childMdxBlogPost___image___birthTime',
  ChildMdxBlogPostImageRoot = 'childMdxBlogPost___image___root',
  ChildMdxBlogPostImageDir = 'childMdxBlogPost___image___dir',
  ChildMdxBlogPostImageBase = 'childMdxBlogPost___image___base',
  ChildMdxBlogPostImageExt = 'childMdxBlogPost___image___ext',
  ChildMdxBlogPostImageName = 'childMdxBlogPost___image___name',
  ChildMdxBlogPostImageRelativeDirectory = 'childMdxBlogPost___image___relativeDirectory',
  ChildMdxBlogPostImageDev = 'childMdxBlogPost___image___dev',
  ChildMdxBlogPostImageMode = 'childMdxBlogPost___image___mode',
  ChildMdxBlogPostImageNlink = 'childMdxBlogPost___image___nlink',
  ChildMdxBlogPostImageUid = 'childMdxBlogPost___image___uid',
  ChildMdxBlogPostImageGid = 'childMdxBlogPost___image___gid',
  ChildMdxBlogPostImageRdev = 'childMdxBlogPost___image___rdev',
  ChildMdxBlogPostImageIno = 'childMdxBlogPost___image___ino',
  ChildMdxBlogPostImageAtimeMs = 'childMdxBlogPost___image___atimeMs',
  ChildMdxBlogPostImageMtimeMs = 'childMdxBlogPost___image___mtimeMs',
  ChildMdxBlogPostImageCtimeMs = 'childMdxBlogPost___image___ctimeMs',
  ChildMdxBlogPostImageAtime = 'childMdxBlogPost___image___atime',
  ChildMdxBlogPostImageMtime = 'childMdxBlogPost___image___mtime',
  ChildMdxBlogPostImageCtime = 'childMdxBlogPost___image___ctime',
  ChildMdxBlogPostImageBirthtime = 'childMdxBlogPost___image___birthtime',
  ChildMdxBlogPostImageBirthtimeMs = 'childMdxBlogPost___image___birthtimeMs',
  ChildMdxBlogPostImageBlksize = 'childMdxBlogPost___image___blksize',
  ChildMdxBlogPostImageBlocks = 'childMdxBlogPost___image___blocks',
  ChildMdxBlogPostImagePublicUrl = 'childMdxBlogPost___image___publicURL',
  ChildMdxBlogPostImageChildrenImageSharp = 'childMdxBlogPost___image___childrenImageSharp',
  ChildMdxBlogPostImageChildrenImageSharpGatsbyImageData = 'childMdxBlogPost___image___childrenImageSharp___gatsbyImageData',
  ChildMdxBlogPostImageChildrenImageSharpId = 'childMdxBlogPost___image___childrenImageSharp___id',
  ChildMdxBlogPostImageChildrenImageSharpChildren = 'childMdxBlogPost___image___childrenImageSharp___children',
  ChildMdxBlogPostImageChildImageSharpGatsbyImageData = 'childMdxBlogPost___image___childImageSharp___gatsbyImageData',
  ChildMdxBlogPostImageChildImageSharpId = 'childMdxBlogPost___image___childImageSharp___id',
  ChildMdxBlogPostImageChildImageSharpChildren = 'childMdxBlogPost___image___childImageSharp___children',
  ChildMdxBlogPostImageChildrenMdx = 'childMdxBlogPost___image___childrenMdx',
  ChildMdxBlogPostImageChildrenMdxRawBody = 'childMdxBlogPost___image___childrenMdx___rawBody',
  ChildMdxBlogPostImageChildrenMdxFileAbsolutePath = 'childMdxBlogPost___image___childrenMdx___fileAbsolutePath',
  ChildMdxBlogPostImageChildrenMdxSlug = 'childMdxBlogPost___image___childrenMdx___slug',
  ChildMdxBlogPostImageChildrenMdxBody = 'childMdxBlogPost___image___childrenMdx___body',
  ChildMdxBlogPostImageChildrenMdxExcerpt = 'childMdxBlogPost___image___childrenMdx___excerpt',
  ChildMdxBlogPostImageChildrenMdxHeadings = 'childMdxBlogPost___image___childrenMdx___headings',
  ChildMdxBlogPostImageChildrenMdxHtml = 'childMdxBlogPost___image___childrenMdx___html',
  ChildMdxBlogPostImageChildrenMdxMdxAst = 'childMdxBlogPost___image___childrenMdx___mdxAST',
  ChildMdxBlogPostImageChildrenMdxTableOfContents = 'childMdxBlogPost___image___childrenMdx___tableOfContents',
  ChildMdxBlogPostImageChildrenMdxTimeToRead = 'childMdxBlogPost___image___childrenMdx___timeToRead',
  ChildMdxBlogPostImageChildrenMdxChildrenMdxBlogPost = 'childMdxBlogPost___image___childrenMdx___childrenMdxBlogPost',
  ChildMdxBlogPostImageChildrenMdxId = 'childMdxBlogPost___image___childrenMdx___id',
  ChildMdxBlogPostImageChildrenMdxChildren = 'childMdxBlogPost___image___childrenMdx___children',
  ChildMdxBlogPostImageChildMdxRawBody = 'childMdxBlogPost___image___childMdx___rawBody',
  ChildMdxBlogPostImageChildMdxFileAbsolutePath = 'childMdxBlogPost___image___childMdx___fileAbsolutePath',
  ChildMdxBlogPostImageChildMdxSlug = 'childMdxBlogPost___image___childMdx___slug',
  ChildMdxBlogPostImageChildMdxBody = 'childMdxBlogPost___image___childMdx___body',
  ChildMdxBlogPostImageChildMdxExcerpt = 'childMdxBlogPost___image___childMdx___excerpt',
  ChildMdxBlogPostImageChildMdxHeadings = 'childMdxBlogPost___image___childMdx___headings',
  ChildMdxBlogPostImageChildMdxHtml = 'childMdxBlogPost___image___childMdx___html',
  ChildMdxBlogPostImageChildMdxMdxAst = 'childMdxBlogPost___image___childMdx___mdxAST',
  ChildMdxBlogPostImageChildMdxTableOfContents = 'childMdxBlogPost___image___childMdx___tableOfContents',
  ChildMdxBlogPostImageChildMdxTimeToRead = 'childMdxBlogPost___image___childMdx___timeToRead',
  ChildMdxBlogPostImageChildMdxChildrenMdxBlogPost = 'childMdxBlogPost___image___childMdx___childrenMdxBlogPost',
  ChildMdxBlogPostImageChildMdxId = 'childMdxBlogPost___image___childMdx___id',
  ChildMdxBlogPostImageChildMdxChildren = 'childMdxBlogPost___image___childMdx___children',
  ChildMdxBlogPostImageId = 'childMdxBlogPost___image___id',
  ChildMdxBlogPostImageParentId = 'childMdxBlogPost___image___parent___id',
  ChildMdxBlogPostImageParentChildren = 'childMdxBlogPost___image___parent___children',
  ChildMdxBlogPostImageChildren = 'childMdxBlogPost___image___children',
  ChildMdxBlogPostImageChildrenId = 'childMdxBlogPost___image___children___id',
  ChildMdxBlogPostImageChildrenChildren = 'childMdxBlogPost___image___children___children',
  ChildMdxBlogPostImageInternalContent = 'childMdxBlogPost___image___internal___content',
  ChildMdxBlogPostImageInternalContentDigest = 'childMdxBlogPost___image___internal___contentDigest',
  ChildMdxBlogPostImageInternalDescription = 'childMdxBlogPost___image___internal___description',
  ChildMdxBlogPostImageInternalFieldOwners = 'childMdxBlogPost___image___internal___fieldOwners',
  ChildMdxBlogPostImageInternalIgnoreType = 'childMdxBlogPost___image___internal___ignoreType',
  ChildMdxBlogPostImageInternalMediaType = 'childMdxBlogPost___image___internal___mediaType',
  ChildMdxBlogPostImageInternalOwner = 'childMdxBlogPost___image___internal___owner',
  ChildMdxBlogPostImageInternalType = 'childMdxBlogPost___image___internal___type',
  ChildMdxBlogPostImageAlt = 'childMdxBlogPost___imageAlt',
  ChildMdxBlogPostBody = 'childMdxBlogPost___body',
  ChildMdxBlogPostParentId = 'childMdxBlogPost___parent___id',
  ChildMdxBlogPostParentParentId = 'childMdxBlogPost___parent___parent___id',
  ChildMdxBlogPostParentParentChildren = 'childMdxBlogPost___parent___parent___children',
  ChildMdxBlogPostParentChildren = 'childMdxBlogPost___parent___children',
  ChildMdxBlogPostParentChildrenId = 'childMdxBlogPost___parent___children___id',
  ChildMdxBlogPostParentChildrenChildren = 'childMdxBlogPost___parent___children___children',
  ChildMdxBlogPostParentInternalContent = 'childMdxBlogPost___parent___internal___content',
  ChildMdxBlogPostParentInternalContentDigest = 'childMdxBlogPost___parent___internal___contentDigest',
  ChildMdxBlogPostParentInternalDescription = 'childMdxBlogPost___parent___internal___description',
  ChildMdxBlogPostParentInternalFieldOwners = 'childMdxBlogPost___parent___internal___fieldOwners',
  ChildMdxBlogPostParentInternalIgnoreType = 'childMdxBlogPost___parent___internal___ignoreType',
  ChildMdxBlogPostParentInternalMediaType = 'childMdxBlogPost___parent___internal___mediaType',
  ChildMdxBlogPostParentInternalOwner = 'childMdxBlogPost___parent___internal___owner',
  ChildMdxBlogPostParentInternalType = 'childMdxBlogPost___parent___internal___type',
  ChildMdxBlogPostChildren = 'childMdxBlogPost___children',
  ChildMdxBlogPostChildrenId = 'childMdxBlogPost___children___id',
  ChildMdxBlogPostChildrenParentId = 'childMdxBlogPost___children___parent___id',
  ChildMdxBlogPostChildrenParentChildren = 'childMdxBlogPost___children___parent___children',
  ChildMdxBlogPostChildrenChildren = 'childMdxBlogPost___children___children',
  ChildMdxBlogPostChildrenChildrenId = 'childMdxBlogPost___children___children___id',
  ChildMdxBlogPostChildrenChildrenChildren = 'childMdxBlogPost___children___children___children',
  ChildMdxBlogPostChildrenInternalContent = 'childMdxBlogPost___children___internal___content',
  ChildMdxBlogPostChildrenInternalContentDigest = 'childMdxBlogPost___children___internal___contentDigest',
  ChildMdxBlogPostChildrenInternalDescription = 'childMdxBlogPost___children___internal___description',
  ChildMdxBlogPostChildrenInternalFieldOwners = 'childMdxBlogPost___children___internal___fieldOwners',
  ChildMdxBlogPostChildrenInternalIgnoreType = 'childMdxBlogPost___children___internal___ignoreType',
  ChildMdxBlogPostChildrenInternalMediaType = 'childMdxBlogPost___children___internal___mediaType',
  ChildMdxBlogPostChildrenInternalOwner = 'childMdxBlogPost___children___internal___owner',
  ChildMdxBlogPostChildrenInternalType = 'childMdxBlogPost___children___internal___type',
  ChildMdxBlogPostInternalContent = 'childMdxBlogPost___internal___content',
  ChildMdxBlogPostInternalContentDigest = 'childMdxBlogPost___internal___contentDigest',
  ChildMdxBlogPostInternalDescription = 'childMdxBlogPost___internal___description',
  ChildMdxBlogPostInternalFieldOwners = 'childMdxBlogPost___internal___fieldOwners',
  ChildMdxBlogPostInternalIgnoreType = 'childMdxBlogPost___internal___ignoreType',
  ChildMdxBlogPostInternalMediaType = 'childMdxBlogPost___internal___mediaType',
  ChildMdxBlogPostInternalOwner = 'childMdxBlogPost___internal___owner',
  ChildMdxBlogPostInternalType = 'childMdxBlogPost___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type MdxFilterInput = {
  rawBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
  childrenMdxBlogPost?: Maybe<MdxBlogPostFilterListInput>;
  childMdxBlogPost?: Maybe<MdxBlogPostFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MdxFilterListInput = {
  elemMatch?: Maybe<MdxFilterInput>;
};

export type MdxFrontmatter = {
  __typename?: 'MdxFrontmatter';
  title: Scalars['String'];
  excerpt?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  image?: Maybe<File>;
  imageAlt?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  redirectFrom?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type MdxFrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MdxFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  image?: Maybe<FileFilterInput>;
  imageAlt?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  redirectFrom?: Maybe<StringQueryOperatorInput>;
};

export type MdxGroupConnection = {
  __typename?: 'MdxGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MdxHeadingMdx = {
  __typename?: 'MdxHeadingMdx';
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MdxHeadingMdxFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MdxHeadingMdxFilterListInput = {
  elemMatch?: Maybe<MdxHeadingMdxFilterInput>;
};

export type MdxSortInput = {
  fields?: Maybe<Array<Maybe<MdxFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MdxWordCount = {
  __typename?: 'MdxWordCount';
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MdxWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY'
}

export type Query = {
  __typename?: 'Query';
  blogPost?: Maybe<BlogPost>;
  allBlogPost: BlogPostConnection;
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  mdx?: Maybe<Mdx>;
  allMdx: MdxConnection;
  mdxBlogPost?: Maybe<MdxBlogPost>;
  allMdxBlogPost: MdxBlogPostConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryBlogPostArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  redirectFrom?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<FileFilterInput>;
  imageAlt?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllBlogPostArgs = {
  filter?: Maybe<BlogPostFilterInput>;
  sort?: Maybe<BlogPostSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMdxArgs = {
  rawBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
  childrenMdxBlogPost?: Maybe<MdxBlogPostFilterListInput>;
  childMdxBlogPost?: Maybe<MdxBlogPostFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMdxArgs = {
  filter?: Maybe<MdxFilterInput>;
  sort?: Maybe<MdxSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMdxBlogPostArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  redirectFrom?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<FileFilterInput>;
  imageAlt?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMdxBlogPostArgs = {
  filter?: Maybe<MdxBlogPostFilterInput>;
  sort?: Maybe<MdxBlogPostSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  BuildTime = 'buildTime'
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  Port = 'port',
  Host = 'host',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  __typename?: 'SitePageContext';
  id?: Maybe<Scalars['String']>;
  previousId?: Maybe<Scalars['String']>;
  nextId?: Maybe<Scalars['String']>;
  maxWidth?: Maybe<Scalars['Int']>;
};

export type SitePageContextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  previousId?: Maybe<StringQueryOperatorInput>;
  nextId?: Maybe<StringQueryOperatorInput>;
  maxWidth?: Maybe<IntQueryOperatorInput>;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Path = 'path',
  Component = 'component',
  InternalComponentName = 'internalComponentName',
  ComponentChunkName = 'componentChunkName',
  MatchPath = 'matchPath',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextId = 'context___id',
  ContextPreviousId = 'context___previousId',
  ContextNextId = 'context___nextId',
  ContextMaxWidth = 'context___maxWidth',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsBase64Width = 'pluginCreator___pluginOptions___base64Width',
  PluginCreatorPluginOptionsStripMetadata = 'pluginCreator___pluginOptions___stripMetadata',
  PluginCreatorPluginOptionsDefaultQuality = 'pluginCreator___pluginOptions___defaultQuality',
  PluginCreatorPluginOptionsFailOnError = 'pluginCreator___pluginOptions___failOnError',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsLegacy = 'pluginCreator___pluginOptions___legacy',
  PluginCreatorPluginOptionsThemeColorInHead = 'pluginCreator___pluginOptions___theme_color_in_head',
  PluginCreatorPluginOptionsCacheBustingMode = 'pluginCreator___pluginOptions___cache_busting_mode',
  PluginCreatorPluginOptionsCrossOrigin = 'pluginCreator___pluginOptions___crossOrigin',
  PluginCreatorPluginOptionsIncludeFavicon = 'pluginCreator___pluginOptions___include_favicon',
  PluginCreatorPluginOptionsCacheDigest = 'pluginCreator___pluginOptions___cacheDigest',
  PluginCreatorPluginOptionsExtensions = 'pluginCreator___pluginOptions___extensions',
  PluginCreatorPluginOptionsGatsbyRemarkPlugins = 'pluginCreator___pluginOptions___gatsbyRemarkPlugins',
  PluginCreatorPluginOptionsGatsbyRemarkPluginsResolve = 'pluginCreator___pluginOptions___gatsbyRemarkPlugins___resolve',
  PluginCreatorPluginOptionsDefaultLayoutsDefault = 'pluginCreator___pluginOptions___defaultLayouts___default',
  PluginCreatorPluginOptionsLessBabel = 'pluginCreator___pluginOptions___lessBabel',
  PluginCreatorPluginOptionsMediaTypes = 'pluginCreator___pluginOptions___mediaTypes',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorPluginOptionsAllExtensions = 'pluginCreator___pluginOptions___allExtensions',
  PluginCreatorPluginOptionsIsTsx = 'pluginCreator___pluginOptions___isTSX',
  PluginCreatorPluginOptionsJsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsBase64Width = 'pluginOptions___base64Width',
  PluginOptionsStripMetadata = 'pluginOptions___stripMetadata',
  PluginOptionsDefaultQuality = 'pluginOptions___defaultQuality',
  PluginOptionsFailOnError = 'pluginOptions___failOnError',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsLegacy = 'pluginOptions___legacy',
  PluginOptionsThemeColorInHead = 'pluginOptions___theme_color_in_head',
  PluginOptionsCacheBustingMode = 'pluginOptions___cache_busting_mode',
  PluginOptionsCrossOrigin = 'pluginOptions___crossOrigin',
  PluginOptionsIncludeFavicon = 'pluginOptions___include_favicon',
  PluginOptionsCacheDigest = 'pluginOptions___cacheDigest',
  PluginOptionsExtensions = 'pluginOptions___extensions',
  PluginOptionsGatsbyRemarkPlugins = 'pluginOptions___gatsbyRemarkPlugins',
  PluginOptionsGatsbyRemarkPluginsResolve = 'pluginOptions___gatsbyRemarkPlugins___resolve',
  PluginOptionsGatsbyRemarkPluginsOptionsMaxWidth = 'pluginOptions___gatsbyRemarkPlugins___options___maxWidth',
  PluginOptionsGatsbyRemarkPluginsOptionsLinkImagesToOriginal = 'pluginOptions___gatsbyRemarkPlugins___options___linkImagesToOriginal',
  PluginOptionsDefaultLayoutsDefault = 'pluginOptions___defaultLayouts___default',
  PluginOptionsLessBabel = 'pluginOptions___lessBabel',
  PluginOptionsMediaTypes = 'pluginOptions___mediaTypes',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  PluginOptionsAllExtensions = 'pluginOptions___allExtensions',
  PluginOptionsIsTsx = 'pluginOptions___isTSX',
  PluginOptionsJsxPragma = 'pluginOptions___jsxPragma',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  icon?: Maybe<Scalars['String']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  crossOrigin?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  extensions?: Maybe<Array<Maybe<Scalars['String']>>>;
  gatsbyRemarkPlugins?: Maybe<Array<Maybe<SitePluginPluginOptionsGatsbyRemarkPlugins>>>;
  defaultLayouts?: Maybe<SitePluginPluginOptionsDefaultLayouts>;
  lessBabel?: Maybe<Scalars['Boolean']>;
  mediaTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsDefaultLayouts = {
  __typename?: 'SitePluginPluginOptionsDefaultLayouts';
  default?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsDefaultLayoutsFilterInput = {
  default?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  crossOrigin?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  extensions?: Maybe<StringQueryOperatorInput>;
  gatsbyRemarkPlugins?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput>;
  defaultLayouts?: Maybe<SitePluginPluginOptionsDefaultLayoutsFilterInput>;
  lessBabel?: Maybe<BooleanQueryOperatorInput>;
  mediaTypes?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsGatsbyRemarkPlugins = {
  __typename?: 'SitePluginPluginOptionsGatsbyRemarkPlugins';
  resolve?: Maybe<Scalars['String']>;
  options?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptions>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  options?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptions = {
  __typename?: 'SitePluginPluginOptionsGatsbyRemarkPluginsOptions';
  maxWidth?: Maybe<Scalars['Int']>;
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput = {
  maxWidth?: Maybe<IntQueryOperatorInput>;
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type ProfileImageQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileImageQuery = (
  { __typename?: 'Query' }
  & { file?: Maybe<(
    { __typename?: 'File' }
    & { childImageSharp?: Maybe<(
      { __typename?: 'ImageSharp' }
      & { fluid?: Maybe<(
        { __typename?: 'ImageSharpFluid' }
        & GatsbyImageSharpFluidFragment
      )> }
    )> }
  )> }
);

export type PostQueryVariables = Exact<{
  id: Scalars['String'];
  previousId?: Maybe<Scalars['String']>;
  nextId?: Maybe<Scalars['String']>;
  maxWidth?: Maybe<Scalars['Int']>;
}>;


export type PostQuery = (
  { __typename?: 'Query' }
  & { blogPost?: Maybe<(
    { __typename?: 'MdxBlogPost' }
    & Pick<MdxBlogPost, 'id' | 'excerpt' | 'body' | 'slug' | 'title' | 'tags' | 'date' | 'imageAlt'>
    & { image?: Maybe<(
      { __typename?: 'File' }
      & { childImageSharp?: Maybe<(
        { __typename?: 'ImageSharp' }
        & { fluid?: Maybe<(
          { __typename?: 'ImageSharpFluid' }
          & Pick<ImageSharpFluid, 'src'>
          & GatsbyImageSharpFluidFragment
        )> }
      )> }
    )> }
  )>, previous?: Maybe<(
    { __typename?: 'MdxBlogPost' }
    & Pick<MdxBlogPost, 'id' | 'excerpt' | 'slug' | 'title' | 'date'>
  )>, next?: Maybe<(
    { __typename?: 'MdxBlogPost' }
    & Pick<MdxBlogPost, 'id' | 'excerpt' | 'slug' | 'title' | 'date'>
  )> }
);

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = (
  { __typename?: 'Query' }
  & { allBlogPost: (
    { __typename?: 'BlogPostConnection' }
    & { nodes: Array<(
      { __typename?: 'MdxBlogPost' }
      & Pick<MdxBlogPost, 'id' | 'excerpt' | 'slug' | 'title' | 'date' | 'tags'>
    )> }
  ) }
);

export type GatsbyImageSharpFixedFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_TracedSvgFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebpFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_NoBase64Fragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFluidFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = (
  { __typename?: 'ImageSharpFluid' }
  & { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] }
);

export type GatsbyImageSharpFluid_TracedSvgFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebpFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_NoBase64Fragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpResolutionsFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_TracedSvgFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_WithWebpFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpResolutions_NoBase64Fragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpSizesFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_TracedSvgFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebpFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpSizes_NoBase64Fragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);
