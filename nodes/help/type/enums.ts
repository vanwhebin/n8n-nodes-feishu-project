/**
 * 资源类型枚举
 */
export declare const enum ResourceType {
	Space = 'space',
	WorkItem = 'workItem',
	User = 'user',
	Attachment = 'attachment',
	Comment = 'comment',
	// 可以根据飞书项目的其他资源类型继续添加
}

/**
 * 操作类型枚举
 */
export declare const enum OperationType {
	// 空间操作
	SpaceList = 'spaceList',
	SpaceDetail = 'spaceDetail',
	// 工作项操作
	WorkItemCreate = 'workItemCreate',
	WorkItemUpdate = 'workItemUpdate',
	WorkItemDelete = 'workItemDelete',
	// 可以根据飞书项目的其他操作类型继续添加
}

/**
 * 输出类型枚举
 */
export declare const enum OutputType {
	Single = 'single',
	Multiple = 'multiple',
	None = 'none',
}

/**
 * 凭证类型枚举
 */
export declare const enum Credentials {
	FeishuProjectApi = 'feishuProjectApi',
}

