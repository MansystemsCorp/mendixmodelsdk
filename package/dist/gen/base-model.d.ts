import { IAbstractModel, AbstractModel } from "../sdk/internal/abstract-model";
import { appservices } from "./appservices";
import { codeactions } from "./codeactions";
import { constants } from "./constants";
import { datasets } from "./datasets";
import { documenttemplates } from "./documenttemplates";
import { domainmodels } from "./domainmodels";
import { enumerations } from "./enumerations";
import { exportmappings } from "./exportmappings";
import { images } from "./images";
import { importmappings } from "./importmappings";
import { javaactions } from "./javaactions";
import { javascriptactions } from "./javascriptactions";
import { jsonstructures } from "./jsonstructures";
import { mappings } from "./mappings";
import { menus } from "./menus";
import { messagedefinitions } from "./messagedefinitions";
import { microflows } from "./microflows";
import { nativepages } from "./nativepages";
import { navigation } from "./navigation";
import { pages } from "./pages";
import { projects } from "./projects";
import { regularexpressions } from "./regularexpressions";
import { rest } from "./rest";
import { scheduledevents } from "./scheduledevents";
import { security } from "./security";
import { settings } from "./settings";
import { texts } from "./texts";
import { webservices } from "./webservices";
import { xmlschemas } from "./xmlschemas";
export interface IBaseModel extends IAbstractModel {
    allBuildingBlocks(): pages.IBuildingBlock[];
    allCodeActions(): codeactions.ICodeAction[];
    allConstants(): constants.IConstant[];
    allConsumedAppServices(): appservices.IConsumedAppService[];
    allConsumedODataServices(): rest.IConsumedODataService[];
    allDataSets(): datasets.IDataSet[];
    allDocuments(): projects.IDocument[];
    allDocumentTemplates(): documenttemplates.IDocumentTemplate[];
    allDomainModels(): domainmodels.IDomainModel[];
    allEnumerations(): enumerations.IEnumeration[];
    allExportMappings(): exportmappings.IExportMapping[];
    allFolders(): projects.IFolder[];
    allFolderBases(): projects.IFolderBase[];
    allFormBases(): pages.IFormBase[];
    allImageCollections(): images.IImageCollection[];
    allImportMappings(): importmappings.IImportMapping[];
    allImportedWebServices(): webservices.IImportedWebService[];
    allJavaActions(): javaactions.IJavaAction[];
    allJavaScriptActions(): javascriptactions.IJavaScriptAction[];
    allJsonStructures(): jsonstructures.IJsonStructure[];
    allLayouts(): pages.ILayout[];
    allMappingDocuments(): mappings.IMappingDocument[];
    allMenuDocuments(): menus.IMenuDocument[];
    allMessageDefinitionCollections(): messagedefinitions.IMessageDefinitionCollection[];
    allMicroflows(): microflows.IMicroflow[];
    allMicroflowBases(): microflows.IMicroflowBase[];
    allModules(): projects.IModule[];
    allModuleDocuments(): projects.IModuleDocument[];
    allModuleSecurities(): security.IModuleSecurity[];
    allMxSchemas(): xmlschemas.IMxSchema[];
    allNanoflows(): microflows.INanoflow[];
    allNativeLayouts(): nativepages.INativeLayout[];
    allNativePages(): nativepages.INativePage[];
    allNavigationDocuments(): navigation.INavigationDocument[];
    allPages(): pages.IPage[];
    allPageTemplates(): pages.IPageTemplate[];
    allProjects(): projects.IProject[];
    allProjectConversions(): projects.IProjectConversion[];
    allProjectDocuments(): projects.IProjectDocument[];
    allProjectSecurities(): security.IProjectSecurity[];
    allProjectSettings(): settings.IProjectSettings[];
    allPublishedAppServices(): webservices.IPublishedAppService[];
    allPublishedODataServices(): rest.IPublishedODataService[];
    allPublishedRestServices(): rest.IPublishedRestService[];
    allPublishedServiceBases(): webservices.IPublishedServiceBase[];
    allPublishedWebServices(): webservices.IPublishedWebService[];
    allRegularExpressions(): regularexpressions.IRegularExpression[];
    allRemoteEntitySourceDocuments(): domainmodels.IRemoteEntitySourceDocument[];
    allRules(): microflows.IRule[];
    allScheduledEvents(): scheduledevents.IScheduledEvent[];
    allServerSideMicroflows(): microflows.IServerSideMicroflow[];
    allSnippets(): pages.ISnippet[];
    allSystemTextCollections(): texts.ISystemTextCollection[];
    allTemplateFormBases(): pages.ITemplateFormBase[];
    allXmlSchemas(): xmlschemas.IXmlSchema[];
    findAppServiceActionByQualifiedName(qname: string): appservices.IAppServiceAction;
    findAppServiceActionParameterByQualifiedName(qname: string): appservices.IAppServiceActionParameter;
    findConstantByQualifiedName(qname: string): constants.IConstant;
    findDataSetByQualifiedName(qname: string): datasets.IDataSet;
    findDataSetParameterByQualifiedName(qname: string): datasets.IDataSetParameter;
    findDocumentTemplateByQualifiedName(qname: string): documenttemplates.IDocumentTemplate;
    findAssociationBaseByQualifiedName(qname: string): domainmodels.IAssociationBase;
    findAttributeByQualifiedName(qname: string): domainmodels.IAttribute;
    findEntityByQualifiedName(qname: string): domainmodels.IEntity;
    findRemoteEntitySourceDocumentByQualifiedName(qname: string): domainmodels.IRemoteEntitySourceDocument;
    findEnumerationByQualifiedName(qname: string): enumerations.IEnumeration;
    findEnumerationValueByQualifiedName(qname: string): enumerations.IEnumerationValue;
    findExportMappingByQualifiedName(qname: string): exportmappings.IExportMapping;
    findImageByQualifiedName(qname: string): images.IImage;
    findImportMappingByQualifiedName(qname: string): importmappings.IImportMapping;
    findJavaActionByQualifiedName(qname: string): javaactions.IJavaAction;
    findJavaActionParameterByQualifiedName(qname: string): javaactions.IJavaActionParameter;
    findJavaScriptActionByQualifiedName(qname: string): javascriptactions.IJavaScriptAction;
    findJavaScriptActionParameterByQualifiedName(qname: string): javascriptactions.IJavaScriptActionParameter;
    findJsonStructureByQualifiedName(qname: string): jsonstructures.IJsonStructure;
    findMenuDocumentByQualifiedName(qname: string): menus.IMenuDocument;
    findMessageDefinitionByQualifiedName(qname: string): messagedefinitions.IMessageDefinition;
    findMicroflowByQualifiedName(qname: string): microflows.IMicroflow;
    findMicroflowParameterByQualifiedName(qname: string): microflows.IMicroflowParameter;
    findNanoflowByQualifiedName(qname: string): microflows.INanoflow;
    findNanoflowParameterByQualifiedName(qname: string): microflows.INanoflowParameter;
    findRuleByQualifiedName(qname: string): microflows.IRule;
    findRuleParameterByQualifiedName(qname: string): microflows.IRuleParameter;
    findNativeLayoutByQualifiedName(qname: string): nativepages.INativeLayout;
    findNativePageByQualifiedName(qname: string): nativepages.INativePage;
    findNavigationProfileByQualifiedName(qname: string): navigation.INavigationProfile;
    findLayoutByQualifiedName(qname: string): pages.ILayout;
    findLayoutParameterByQualifiedName(qname: string): pages.ILayoutParameter;
    findPageByQualifiedName(qname: string): pages.IPage;
    findSnippetByQualifiedName(qname: string): pages.ISnippet;
    findRegularExpressionByQualifiedName(qname: string): regularexpressions.IRegularExpression;
    findModuleRoleByQualifiedName(qname: string): security.IModuleRole;
    findUserRoleByQualifiedName(qname: string): security.IUserRole;
    findImportedWebServiceByQualifiedName(qname: string): webservices.IImportedWebService;
    findXmlSchemaByQualifiedName(qname: string): xmlschemas.IXmlSchema;
}
/**
 * Class to find generated model units.
 */
export declare abstract class BaseModel extends AbstractModel implements IBaseModel {
    allBuildingBlocks(): pages.IBuildingBlock[];
    allCodeActions(): codeactions.ICodeAction[];
    allConstants(): constants.IConstant[];
    allConsumedAppServices(): appservices.IConsumedAppService[];
    allConsumedODataServices(): rest.IConsumedODataService[];
    allDataSets(): datasets.IDataSet[];
    allDocuments(): projects.IDocument[];
    allDocumentTemplates(): documenttemplates.IDocumentTemplate[];
    allDomainModels(): domainmodels.IDomainModel[];
    allEnumerations(): enumerations.IEnumeration[];
    allExportMappings(): exportmappings.IExportMapping[];
    allFolders(): projects.IFolder[];
    allFolderBases(): projects.IFolderBase[];
    allFormBases(): pages.IFormBase[];
    allImageCollections(): images.IImageCollection[];
    allImportMappings(): importmappings.IImportMapping[];
    allImportedWebServices(): webservices.IImportedWebService[];
    allJavaActions(): javaactions.IJavaAction[];
    allJavaScriptActions(): javascriptactions.IJavaScriptAction[];
    allJsonStructures(): jsonstructures.IJsonStructure[];
    allLayouts(): pages.ILayout[];
    allMappingDocuments(): mappings.IMappingDocument[];
    allMenuDocuments(): menus.IMenuDocument[];
    allMessageDefinitionCollections(): messagedefinitions.IMessageDefinitionCollection[];
    allMicroflows(): microflows.IMicroflow[];
    allMicroflowBases(): microflows.IMicroflowBase[];
    allModules(): projects.IModule[];
    allModuleDocuments(): projects.IModuleDocument[];
    allModuleSecurities(): security.IModuleSecurity[];
    allMxSchemas(): xmlschemas.IMxSchema[];
    allNanoflows(): microflows.INanoflow[];
    allNativeLayouts(): nativepages.INativeLayout[];
    allNativePages(): nativepages.INativePage[];
    allNavigationDocuments(): navigation.INavigationDocument[];
    allPages(): pages.IPage[];
    allPageTemplates(): pages.IPageTemplate[];
    allProjects(): projects.IProject[];
    allProjectConversions(): projects.IProjectConversion[];
    allProjectDocuments(): projects.IProjectDocument[];
    allProjectSecurities(): security.IProjectSecurity[];
    allProjectSettings(): settings.IProjectSettings[];
    allPublishedAppServices(): webservices.IPublishedAppService[];
    allPublishedODataServices(): rest.IPublishedODataService[];
    allPublishedRestServices(): rest.IPublishedRestService[];
    allPublishedServiceBases(): webservices.IPublishedServiceBase[];
    allPublishedWebServices(): webservices.IPublishedWebService[];
    allRegularExpressions(): regularexpressions.IRegularExpression[];
    allRemoteEntitySourceDocuments(): domainmodels.IRemoteEntitySourceDocument[];
    allRules(): microflows.IRule[];
    allScheduledEvents(): scheduledevents.IScheduledEvent[];
    allServerSideMicroflows(): microflows.IServerSideMicroflow[];
    allSnippets(): pages.ISnippet[];
    allSystemTextCollections(): texts.ISystemTextCollection[];
    allTemplateFormBases(): pages.ITemplateFormBase[];
    allXmlSchemas(): xmlschemas.IXmlSchema[];
    findAppServiceActionByQualifiedName(qname: string): appservices.IAppServiceAction;
    findAppServiceActionParameterByQualifiedName(qname: string): appservices.IAppServiceActionParameter;
    findConstantByQualifiedName(qname: string): constants.IConstant;
    findDataSetByQualifiedName(qname: string): datasets.IDataSet;
    findDataSetParameterByQualifiedName(qname: string): datasets.IDataSetParameter;
    findDocumentTemplateByQualifiedName(qname: string): documenttemplates.IDocumentTemplate;
    findAssociationBaseByQualifiedName(qname: string): domainmodels.IAssociationBase;
    findAttributeByQualifiedName(qname: string): domainmodels.IAttribute;
    findEntityByQualifiedName(qname: string): domainmodels.IEntity;
    findRemoteEntitySourceDocumentByQualifiedName(qname: string): domainmodels.IRemoteEntitySourceDocument;
    findEnumerationByQualifiedName(qname: string): enumerations.IEnumeration;
    findEnumerationValueByQualifiedName(qname: string): enumerations.IEnumerationValue;
    findExportMappingByQualifiedName(qname: string): exportmappings.IExportMapping;
    findImageByQualifiedName(qname: string): images.IImage;
    findImportMappingByQualifiedName(qname: string): importmappings.IImportMapping;
    findJavaActionByQualifiedName(qname: string): javaactions.IJavaAction;
    findJavaActionParameterByQualifiedName(qname: string): javaactions.IJavaActionParameter;
    findJavaScriptActionByQualifiedName(qname: string): javascriptactions.IJavaScriptAction;
    findJavaScriptActionParameterByQualifiedName(qname: string): javascriptactions.IJavaScriptActionParameter;
    findJsonStructureByQualifiedName(qname: string): jsonstructures.IJsonStructure;
    findMenuDocumentByQualifiedName(qname: string): menus.IMenuDocument;
    findMessageDefinitionByQualifiedName(qname: string): messagedefinitions.IMessageDefinition;
    findMicroflowByQualifiedName(qname: string): microflows.IMicroflow;
    findMicroflowParameterByQualifiedName(qname: string): microflows.IMicroflowParameter;
    findNanoflowByQualifiedName(qname: string): microflows.INanoflow;
    findNanoflowParameterByQualifiedName(qname: string): microflows.INanoflowParameter;
    findRuleByQualifiedName(qname: string): microflows.IRule;
    findRuleParameterByQualifiedName(qname: string): microflows.IRuleParameter;
    findNativeLayoutByQualifiedName(qname: string): nativepages.INativeLayout;
    findNativePageByQualifiedName(qname: string): nativepages.INativePage;
    findNavigationProfileByQualifiedName(qname: string): navigation.INavigationProfile;
    findLayoutByQualifiedName(qname: string): pages.ILayout;
    findLayoutParameterByQualifiedName(qname: string): pages.ILayoutParameter;
    findPageByQualifiedName(qname: string): pages.IPage;
    findSnippetByQualifiedName(qname: string): pages.ISnippet;
    findRegularExpressionByQualifiedName(qname: string): regularexpressions.IRegularExpression;
    findModuleRoleByQualifiedName(qname: string): security.IModuleRole;
    findUserRoleByQualifiedName(qname: string): security.IUserRole;
    findImportedWebServiceByQualifiedName(qname: string): webservices.IImportedWebService;
    findXmlSchemaByQualifiedName(qname: string): xmlschemas.IXmlSchema;
}
/**
 * This interface exposes a single Mendix Model.
 * This interface contains the parts of the {@link Model} that are exposed through the SDK.
 */
export interface IModel extends IBaseModel {
    /**
     * The actual contents of the model.
     */
    root: projects.IProject;
    /**
     * Given a qualified name, returns a Module.
     */
    findModuleByQualifiedName(qualifiedName: string): projects.IModule | null;
}